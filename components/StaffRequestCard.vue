<template>
  <div class="request-card">
    <div class="rc-header">
      <div>
        <div class="rc-title">{{ request.docName }}</div>
        <div class="rc-ref">Ref: {{ request.id }}</div>
      </div>
      <span :class="['badge', badgeClass]">{{ badgeIcon }} {{ badgeLabel }}</span>
    </div>
    <div class="rc-meta">
      <span>👤 {{ request.requester }}</span>
      <span>📅 {{ request.date }}</span>
      <span>🕐 {{ request.time }}</span>
    </div>
    <div class="rc-actions" v-if="request.status === 'pending'">
      <button class="btn-green" @click="$emit('approve', request.id)">✅ Approve</button>
      <button class="btn-red" @click="$emit('reject', request.id)">✖ Reject</button>
    </div>
    <div v-else-if="request.status === 'approved'">
      <button class="btn-green" style="width:100%" @click="$emit('markReady', request.id)">
        📦 Mark as Ready for Pickup
      </button>
    </div>
    <div v-else-if="request.status === 'ready'" style="background:#f0fdf4; border-radius:8px; padding:8px 12px; font-size:12px; color:#16a34a; font-weight:600; text-align:center">
      Ready for pickup – awaiting collection
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ request: any }>()
defineEmits(['approve', 'reject', 'markReady'])

const badgeClass = computed(() => ({
  pending: 'badge badge-pending',
  approved: 'badge badge-approved',
  ready: 'badge badge-ready',
  rejected: 'badge badge-rejected'
}[props.request.status] || 'badge'))

const badgeIcon = computed(() => ({ pending:'🕐', approved:'✅', ready:'📦', rejected:'✖' }[props.request.status] || ''))
const badgeLabel = computed(() => ({ pending:'Pending', approved:'Approved', ready:'Ready for Pickup', rejected:'Rejected' }[props.request.status] || props.request.status))
</script>
