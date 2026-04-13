<template>
  <div class="login-page">
    <!-- Hero header -->
    <div class="hero-header">
      <div class="logo-wrap">
        <div class="logo-icon">🎓</div>
        <div>
          <div class="portal-title">University Portal</div>
          <div class="portal-sub">Document Request System</div>
        </div>
      </div>
    </div>

    <!-- Form area -->
    <div class="login-form-area">
      <div class="login-subtitle">{{ selectedRole === 'alumni' ? 'ALUMNI' : 'STAFF' }}</div>

      <!-- Role selector -->
      <div class="role-selector">
        <button :class="['role-btn', { active: selectedRole === 'alumni' }]" @click="selectedRole = 'alumni'">
          <span class="role-icon">👤</span>
          Alumni
        </button>
        <button :class="['role-btn', { active: selectedRole === 'staff' }]" @click="selectedRole = 'staff'">
          <span class="role-icon">👥</span>
          Staff
        </button>
      </div>

      <FormInput v-model="email" label="Email" type="email" placeholder="Enter your email" />
      <FormInput v-model="password" label="Password" type="password" placeholder="Enter your password" />

      <div style="margin-top:20px">
        <button class="btn-primary" @click="handleLogin">Login</button>
      </div>

      <div class="text-center mt-16">
        <button class="btn-link">Forgot Password?</button>
      </div>
      <div class="text-center mt-8">
        <span class="text-sm text-muted">Don't have an account? </span>
        <button class="btn-link">Create Account</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '~/composables/useAppState'
const { role } = useAppState()
const selectedRole = ref<'alumni' | 'staff'>('alumni')
const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  role.value = selectedRole.value
  if (selectedRole.value === 'alumni') {
    router.push('/alumni/dashboard')
  } else {
    router.push('/staff/dashboard')
  }
}
</script>
