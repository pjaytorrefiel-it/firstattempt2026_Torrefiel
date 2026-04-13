<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/alumni/dashboard"><button class="back-btn">←</button></NuxtLink>
      <h2>Select Document</h2>
    </div>

    <div class="content">
      <p class="text-sm text-muted mb-12">Choose the document you need to request</p>

      <div
        v-for="doc in documents"
        :key="doc.id"
        :class="['doc-item', { selected: selected === doc.id }]"
        @click="selected = doc.id"
      >
        <div class="doc-icon">{{ doc.icon }}</div>
        <div class="doc-info">
          <div class="doc-name">{{ doc.name }}</div>
          <div class="doc-sub">{{ doc.sub }}</div>
        </div>
        <div class="doc-price" v-if="doc.price">₱{{ doc.price }}</div>
      </div>

      <div style="margin-top:20px">
        <button class="btn-primary" :disabled="!selected" @click="proceed">
          Continue to Appointment
        </button>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '~/composables/useAppState'
import { useMockData } from '~/composables/useMockData'
const { documents } = useMockData()
const { currentRequest } = useAppState()
const selected = ref<number | null>(null)
const router = useRouter()

const proceed = () => {
  const doc = documents.find(d => d.id === selected.value)
  if (doc) {
    currentRequest.value.document = doc
    router.push('/alumni/appointment')
  }
}
</script>
