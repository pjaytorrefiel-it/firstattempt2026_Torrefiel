<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/alumni/dashboard"><button class="back-btn">←</button></NuxtLink>
      <h2>Order Tracker</h2>
    </div>

    <div class="content">
      <p class="text-sm text-muted mb-16">Track your document request</p>

      <!-- No requests -->
      <div v-if="!alumniRequests.length" class="no-results">
        No requests found
      </div>

      <!-- Request selector if multiple -->
      <div v-if="alumniRequests.length > 1" class="mb-12">
        <label class="form-label">Select Request</label>
        <select v-model="selectedId" class="form-input">
          <option v-for="r in alumniRequests" :key="r.id" :value="r.id">
            {{ r.id }} – {{ r.docName }}
          </option>
        </select>
      </div>

      <!-- Order card -->
      <div v-if="current" class="order-card">
        <div class="order-header">
          <div>
            <div class="order-num">{{ current.id }}</div>
            <div class="order-sub">{{ current.docName }} ({{ current.docType }})</div>
          </div>
          <span class="badge badge-processing">⏳ Processing...</span>
        </div>
        <div class="order-eta text-xs text-muted">Est. delivery: {{ current.eta }}</div>
      </div>

      <!-- Steps -->
      <div v-if="current?.steps" class="tracker-steps">
        <div
          v-for="(step, i) in current.steps"
          :key="i"
          :class="['tracker-step', { done: step.done, active: step.active }]"
        >
          <div class="step-icon">
            <span v-if="step.done">✓</span>
            <span v-else-if="step.active">⏳</span>
            <span v-else>{{ stepIcons[i] }}</span>
          </div>
          <div class="step-body">
            <h4>{{ step.label }}</h4>
            <p>{{ step.desc }}</p>
            <div v-if="step.date" class="step-date">{{ step.date }}</div>
            <div v-if="step.note" style="font-size:12px;color:var(--accent);font-weight:600;margin-top:2px">{{ step.note }}</div>
          </div>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useMockData } from '~/composables/useMockData'
const { alumniRequests } = useMockData()
const selectedId = ref(alumniRequests.value[0]?.id)
const stepIcons = ['📦','⏳','🔍','🚚','🏠']

const current = computed(() => alumniRequests.value.find(r => r.id === selectedId.value) || alumniRequests.value[0])
</script>
