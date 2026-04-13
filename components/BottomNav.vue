<template>
  <nav class="bottom-nav">
    <NuxtLink :to="profilePath" :class="{ active: isActive(profilePath) }">
      <span class="nav-icon">👤</span>
      <span>My Profile</span>
    </NuxtLink>
    <NuxtLink :to="dashboardPath" :class="{ active: isActive(dashboardPath) }">
      <span class="nav-icon">⊞</span>
      <span>Dashboard</span>
    </NuxtLink>
    <NuxtLink :to="historyPath" :class="{ active: isActive(historyPath) }">
      <span class="nav-icon">📋</span>
      <span>{{ historyLabel }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { useAppState } from '~/composables/useAppState'
const { role } = useAppState()
const route = useRoute()

const profilePath = computed(() => role.value === 'alumni' ? '/alumni/profile' : '/staff/profile')
const dashboardPath = computed(() => role.value === 'alumni' ? '/alumni/dashboard' : '/staff/dashboard')
const historyPath = computed(() => role.value === 'alumni' ? '/alumni/history' : '/staff/filter')
const historyLabel = computed(() => role.value === 'alumni' ? 'History' : 'Orders')

const isActive = (path: string) => route.path === path
</script>
