<template>
  <div class="card" style="cursor:pointer" @click="$emit('click')">
    <div class="flex-between mb-8">
      <div>
        <div class="fw-600" style="font-size:14px">{{ request.docName }}</div>
        <div class="text-xs text-muted mt-4">{{ request.id }}</div>
      </div>
      <span :class="['badge', badgeClass]">{{ badgeLabel }}</span>
    </div>
    <div style="display:flex; gap:12px; font-size:12px; color:var(--gray-500)">
      <span>📅 {{ request.date }}</span>
      <span>🕐 {{ request.time }}</span>
    </div>
    <div v-if="request.price" style="margin-top:8px; font-size:13px; font-weight:700; color:var(--navy)">
      ₱{{ request.price }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ request: any }>()
defineEmits(['click'])

const badgeClass = computed(() => ({
  processing: 'badge badge-processing',
  approved: 'badge badge-approved',
  ready: 'badge badge-ready',
  pending: 'badge badge-pending',
  rejected: 'badge badge-rejected'
}[props.request.status] || 'badge badge-pending'))

const badgeLabel = computed(() => ({
  processing: '⏳ Processing',
  approved: '✅ Approved',
  ready: '📦 Ready',
  pending: '🕐 Pending',
  rejected: '✖ Rejected'
}[props.request.status] || props.request.status))
</script>
