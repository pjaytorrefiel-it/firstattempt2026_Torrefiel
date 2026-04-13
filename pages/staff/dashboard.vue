<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <!-- Welcome bar -->
    <div class="welcome-bar">
      <div>
        <h2>Welcome Back!</h2>
        <p>Admin Staff</p>
      </div>
      <NuxtLink to="/staff/profile">
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

      <!-- Manage requests CTA -->
      <NuxtLink to="/staff/filter" style="text-decoration:none">
        <button class="btn-primary mb-12">📋 Manage Requests</button>
      </NuxtLink>

      <!-- Notification -->
      <div class="alert-info" v-if="pending.length > 0">
        ℹ️ {{ pending.length }} pending request{{ pending.length > 1 ? 's' : '' }} need{{ pending.length === 1 ? 's' : '' }} your attention
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
const { staffRequests } = useMockData()
const pending = computed(() => staffRequests.value.filter(r => r.status === 'pending'))
const approved = computed(() => staffRequests.value.filter(r => r.status === 'approved'))
const ready = computed(() => staffRequests.value.filter(r => r.status === 'ready'))
</script>
