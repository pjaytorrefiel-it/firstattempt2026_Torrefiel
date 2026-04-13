<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/staff/dashboard"><button class="back-btn">←</button></NuxtLink>
      <h2>Staff Management</h2>
    </div>

    <div class="content">
      <p class="text-xs text-muted mb-12">Manage Document Requests</p>

      <!-- Filter tabs -->
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:12px">
        <span style="font-size:13px;color:var(--gray-500);font-weight:600">▼ Filter by Status</span>
      </div>
      <div class="filter-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          :class="['filter-tab', { active: activeFilter === tab.value }]"
          @click="activeFilter = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Stats bar -->
      <div class="card mb-12" style="padding:12px 16px">
        <div style="display:flex;justify-content:space-around;text-align:center">
          <div>
            <div style="font-size:20px;font-weight:700;color:var(--navy)">{{ staffRequests.length }}</div>
            <div style="font-size:11px;color:var(--gray-400);font-weight:600">Total</div>
          </div>
          <div>
            <div style="font-size:20px;font-weight:700;color:var(--yellow)">{{ countByStatus('pending') }}</div>
            <div style="font-size:11px;color:var(--gray-400);font-weight:600">Pending</div>
          </div>
          <div>
            <div style="font-size:20px;font-weight:700;color:var(--green)">{{ countByStatus('approved') }}</div>
            <div style="font-size:11px;color:var(--gray-400);font-weight:600">Approved</div>
          </div>
          <div>
            <div style="font-size:20px;font-weight:700;color:var(--teal)">{{ countByStatus('ready') }}</div>
            <div style="font-size:11px;color:var(--gray-400);font-weight:600">Ready</div>
          </div>
        </div>
      </div>

      <!-- Request list -->
      <div v-if="filtered.length === 0" class="no-results">No requests found</div>

      <StaffRequestCard
        v-for="req in filtered"
        :key="req.id"
        :request="req"
        @approve="approveRequest"
        @reject="rejectRequest"
        @markReady="markReady"
      />
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useMockData } from '~/composables/useMockData'
const { staffRequests } = useMockData()

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Approved', value: 'approved' },
  { label: 'Rejected', value: 'rejected' },
  { label: 'Ready for Pickup', value: 'ready' }
]

const activeFilter = ref('all')

const filtered = computed(() => {
  if (activeFilter.value === 'all') return staffRequests.value
  return staffRequests.value.filter(r => r.status === activeFilter.value)
})

const countByStatus = (status: string) => staffRequests.value.filter(r => r.status === status).length

const approveRequest = (id: string) => {
  const req = staffRequests.value.find(r => r.id === id)
  if (req) req.status = 'approved'
}

const rejectRequest = (id: string) => {
  const req = staffRequests.value.find(r => r.id === id)
  if (req) req.status = 'rejected'
}

const markReady = (id: string) => {
  const req = staffRequests.value.find(r => r.id === id)
  if (req) req.status = 'ready'
}
</script>
