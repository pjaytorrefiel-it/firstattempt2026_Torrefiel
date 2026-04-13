<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/staff/dashboard"><button class="back-btn">←</button></NuxtLink>
      <h2>My Profile</h2>
    </div>

    <div class="content">
      <!-- Avatar -->
      <div class="profile-avatar">
        <div class="avatar-circle">👤</div>
        <div class="profile-name">{{ staffUser.name }}</div>
        <span class="profile-role" style="background:#e0f2fe;color:#0369a1">Registrar Staff</span>
      </div>

      <!-- Account info -->
      <div class="info-section">
        <h3>Account Information</h3>
        <div class="card" style="padding:0 16px">
          <div class="info-row">
            <span class="info-icon">✉️</span>
            <div>
              <div class="info-key">Email</div>
              <div class="info-val">{{ staffUser.email }}</div>
            </div>
          </div>
          <div class="info-row">
            <span class="info-icon">👥</span>
            <div>
              <div class="info-key">Account Type</div>
              <div class="info-val">Staff Account</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick info -->
      <div class="info-section">
        <h3>Quick Links</h3>
        <div class="card" style="padding:0 16px">
          <NuxtLink to="/staff/filter" class="quick-link">
            <div style="display:flex;align-items:center;gap:8px">
              <span>📋</span>
              <span>Manage Requests</span>
            </div>
            <span class="chevron">›</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Logout -->
      <button class="btn-logout" @click="logout">⇐ Logout</button>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useMockData } from '~/composables/useMockData'
const { staffUser } = useMockData()
const router = useRouter()
const logout = () => router.push('/')
</script>
