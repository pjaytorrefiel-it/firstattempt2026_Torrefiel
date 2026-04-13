<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/alumni/dashboard"><button class="back-btn">←</button></NuxtLink>
      <h2>Transaction History</h2>
    </div>

    <div class="content">
      <p class="text-sm text-muted mb-16">Your payment records and receipts</p>

      <div v-if="!transactions.length" class="no-results">No transactions found</div>

      <div v-for="tx in transactions" :key="tx.id" class="tx-item">
        <div class="tx-icon">📄</div>
        <div class="tx-body">
          <div class="tx-name">{{ tx.docName }}</div>
          <div class="tx-ref">Ref: {{ tx.ref }}</div>
          <div class="tx-date">📅 {{ tx.date }}</div>
        </div>
        <div class="tx-right">
          <div class="tx-amount">₱{{ tx.amount }}</div>
          <div class="tx-status">
            <span class="badge badge-approved">✅ Paid</span>
          </div>
        </div>
      </div>

      <!-- Summary total -->
      <div class="card mt-16">
        <div class="flex-between">
          <span class="text-sm text-muted fw-600">Total Paid</span>
          <span style="font-size:18px;font-weight:700;color:var(--navy)">
            ₱{{ transactions.reduce((s, t) => s + t.amount, 0) }}
          </span>
        </div>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useMockData } from '~/composables/useMockData'
const { transactions } = useMockData()
</script>
