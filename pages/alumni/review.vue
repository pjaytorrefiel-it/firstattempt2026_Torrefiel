<template>
  <div style="display:flex; flex-direction:column; min-height:100vh">
    <div class="top-bar">
      <NuxtLink to="/alumni/appointment"><button class="back-btn">←</button></NuxtLink>
      <h2>Review Request</h2>
    </div>

    <div class="content">
      <p class="text-sm text-muted mb-12">Please review your request details before submitting</p>

      <!-- Document details -->
      <div class="card">
        <div class="review-section">
          <h3>Document Details</h3>
          <div class="review-row">
            <span class="rr-icon">📄</span>
            <div class="rr-content">
              <div class="rr-key">Document Type</div>
              <div class="rr-val">{{ doc?.name || 'Transcript of Records' }}</div>
            </div>
          </div>
          <div class="review-row">
            <span class="rr-icon">📅</span>
            <div class="rr-content">
              <div class="rr-key">Appointment Date</div>
              <div class="rr-val">{{ currentRequest.date || 'Friday, February 27, 2026' }}</div>
            </div>
          </div>
          <div class="review-row">
            <span class="rr-icon">🕐</span>
            <div class="rr-content">
              <div class="rr-key">Appointment Time</div>
              <div class="rr-val">{{ currentRequest.time || '10:00 AM' }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment details -->
      <div class="card">
        <div class="review-section">
          <h3>Payment Details</h3>
          <div class="total-row">
            <span class="total-label">Processing Fee</span>
            <span class="rr-amount">₱{{ doc?.price || 150 }}</span>
          </div>
          <div class="divider"></div>
          <div class="total-row">
            <span class="total-label" style="font-weight:700">Total Amount</span>
            <span class="total-amount">₱{{ doc?.price || 150 }}</span>
          </div>
          <div class="review-row" style="margin-top:8px">
            <span class="rr-icon">💳</span>
            <div class="rr-content">
              <div class="rr-key">Payment Method</div>
              <div class="rr-val">Pay at Cashier</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Important notes -->
      <div class="notes-box">
        <h4>⚡ Important Notes</h4>
        <ul>
          <li>Bring a valid ID on your appointment</li>
          <li>Payment will be collected at the cashier</li>
          <li>Processing takes 3-5 business days</li>
          <li>You'll receive updates via email</li>
        </ul>
      </div>

      <button class="btn-primary" @click="submit">Submit Request</button>
      <div class="text-center mt-12">
        <NuxtLink to="/alumni/appointment" class="btn-link">Back to edit details</NuxtLink>
      </div>
    </div>

    <BottomNav />
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '~/composables/useAppState'
import { useMockData } from '~/composables/useMockData'
const { currentRequest } = useAppState()
const { alumniRequests } = useMockData()
const router = useRouter()

const doc = computed(() => currentRequest.value.document)

const submit = () => {
  // Simulate adding request
  alumniRequests.value.unshift({
    id: `ALM-2026-${String(alumniRequests.value.length + 1).padStart(4, '0')}`,
    docName: doc.value?.name || 'Transcript of Records',
    docType: 'TOR',
    status: 'processing',
    date: currentRequest.value.date || 'Feb 27, 2026',
    time: currentRequest.value.time || '9:00AM',
    price: doc.value?.price || 150,
    eta: 'March 5, 2026',
    steps: [
      { label: 'Order Placed', desc: 'Your request has been submitted', date: 'Today', done: true },
      { label: 'Processing', desc: 'Document is being prepared by the Registrar', note: 'In Progress...', active: true },
      { label: 'Quality Check', desc: 'Document is being reviewed', done: false },
      { label: 'Out for Delivery', desc: 'On its way', done: false },
      { label: 'Delivered', desc: 'Document has been received', done: false }
    ]
  })
  router.push('/alumni/tracker')
}
</script>
