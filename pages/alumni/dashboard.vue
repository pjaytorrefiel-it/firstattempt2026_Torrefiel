<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <!-- Welcome bar -->
    <div class="welcome-bar">
      <div>
        <h2>Welcome Back!</h2>
        <p>{{ alumniUser.name }}</p>
      </div>
      <NuxtLink to="/alumni/profile">
        <button class="avatar-btn">👤</button>
      </NuxtLink>
    </div>

    <div class="content">
      <!-- Stats -->
      <div class="card-row">
        <div class="stat-card">
          <span class="stat-icon" style="color:var(--yellow)">🕐</span>
          <span class="stat-num">{{ pending.length }}</span>
          <span class="stat-label">Pending</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon" style="color:var(--green)">✅</span>
          <span class="stat-num">{{ approved.length }}</span>
          <span class="stat-label">Approved</span>
        </div>
        <div class="stat-card">
          <span class="stat-icon" style="color:var(--teal)">📄</span>
          <span class="stat-num">{{ ready.length }}</span>
          <span class="stat-label">Ready</span>
        </div>
      </div>

      <!-- Request Document CTA -->
      <NuxtLink to="/alumni/request" style="text-decoration:none">
        <button class="btn-primary mb-12">📄 Request Document</button>
      </NuxtLink>

      <!-- Quick links -->
      <NuxtLink to="/alumni/tracker" class="manage-link" style="text-decoration:none">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:18px">📄</span>
          <div>
            <div>My Requests</div>
            <div class="ml-sub">Track your Documents</div>
          </div>
        </div>
        <span style="color:var(--gray-400)">›</span>
      </NuxtLink>

      <div class="manage-link" style="cursor:default">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:18px">📅</span>
          <div>
            <div>Appointment Schedule</div>
            <div class="ml-sub">View your Bookings</div>
          </div>
        </div>
      </div>

      <!-- How it works -->
      <div class="how-box mt-12">
        <h4>⚡ How it works</h4>
        <ul>
          <li>Select your required document</li>
          <li>Schedule an appointment to avoid queues</li>
          <li>Track your request status in real-time</li>
          <li>Pick up when ready</li>
        </ul>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useMockData } from '~/composables/useMockData'
const { alumniUser, alumniRequests } = useMockData()
const pending = computed(() => alumniRequests.value.filter(r => r.status === 'pending' || r.status === 'processing'))
const approved = computed(() => alumniRequests.value.filter(r => r.status === 'approved'))
const ready = computed(() => alumniRequests.value.filter(r => r.status === 'ready'))
</script>
