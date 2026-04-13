<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/alumni/request"><button class="back-btn">←</button></NuxtLink>
      <h2>Schedule Appointment</h2>
    </div>

    <div class="content">
      <!-- Selected document display -->
      <div class="selected-doc-display">
        <span class="sd-icon">📄</span>
        <div>
          <div class="sd-sub">Selected Document</div>
          <div class="sd-name">{{ docName }}</div>
        </div>
      </div>

      <!-- Date input -->
      <div class="form-group">
        <label class="form-label">Enter Date</label>
        <input type="date" v-model="date" class="form-input" />
      </div>

      <!-- Time input -->
      <div class="form-group">
        <label class="form-label">Enter Time</label>
        <select v-model="time" class="form-input">
          <option value="">Select time</option>
          <option v-for="t in timeSlots" :key="t" :value="t">{{ t }}</option>
        </select>
      </div>

      <!-- Appointment summary display -->
      <div v-if="date && time" class="appt-display">
        <span class="appt-icon">🕐</span>
        <div>
          <div class="appt-sub">Appointment Schedule</div>
          <div class="appt-text">{{ formattedDate }} – {{ time }}</div>
        </div>
      </div>

      <div style="margin-top:24px">
        <button class="btn-primary" :disabled="!date || !time" @click="proceed">
          Continue to Summary
        </button>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '~/composables/useAppState'
const { currentRequest } = useAppState()
const router = useRouter()

const docName = computed(() => currentRequest.value.document?.name || 'Transcript of Records')
const date = ref('2026-02-27')
const time = ref('9:00AM')

const timeSlots = ['8:00AM','9:00AM','10:00AM','11:00AM','1:00PM','2:00PM','3:00PM','4:00PM']

const formattedDate = computed(() => {
  if (!date.value) return ''
  const d = new Date(date.value + 'T12:00:00')
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
})

const proceed = () => {
  currentRequest.value.date = formattedDate.value
  currentRequest.value.time = time.value
  router.push('/alumni/review')
}
</script>
