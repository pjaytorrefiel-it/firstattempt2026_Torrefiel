// composables/useMockData.ts
export const useMockData = () => {
  const alumniUser = {
    name: 'Ruvic Santos',
    email: 'rvsantos@gmail.com',
    studentId: '2022-012345',
    accountType: 'Alumni Account',
    role: 'Alumni'
  }

  const staffUser = {
    name: 'Admin Staff',
    email: 'adobo@addu.edu.ph',
    studentId: 'STF-2024-001',
    accountType: 'Staff Account',
    role: 'Registrar Staff'
  }

  const documents = [
    { id: 1, name: 'Transcript of Records', sub: 'Official academic records', price: 150, icon: '📄' },
    { id: 2, name: 'Diploma Copy', sub: 'Certified true copy', price: 200, icon: '🎓' },
    { id: 3, name: 'Certificate of Enrollment', sub: 'Proof of enrollment', price: 150, icon: '📋' },
    { id: 4, name: 'Good Moral Certificate', sub: 'Character certificate', price: 200, icon: '⭐' },
    { id: 5, name: 'Other', sub: 'Specify your document', price: null, icon: '📁' }
  ]

  const alumniRequests = ref([
    {
      id: 'ALM-2026-0001',
      docName: 'Transcript of Records',
      docType: 'TOR',
      status: 'processing',
      date: 'Feb 22, 2026',
      time: '10:30 AM',
      price: 150,
      eta: 'March 1, 2026',
      steps: [
        { label: 'Order Placed', desc: 'Your request has been submitted', date: 'Feb 22, 2026 – 10:30 AM', done: true },
        { label: 'Processing', desc: 'Document is being prepared by the Registrar', note: 'In Progress...', active: true },
        { label: 'Quality Check', desc: 'Document is being reviewed by the Registrar', done: false },
        { label: 'Out for Delivery', desc: 'On its way to your address', done: false },
        { label: 'Delivered', desc: 'Document has been received', done: false }
      ]
    },
    {
      id: 'ALM-2026-0002',
      docName: 'Good Moral Certificate',
      docType: 'GMC',
      status: 'approved',
      date: 'Feb 15, 2026',
      time: '9:00 AM',
      price: 200,
      eta: 'Feb 20, 2026'
    }
  ])

  const staffRequests = ref([
    {
      id: 'REF-2026-001',
      docName: 'Transcript of Records',
      requester: 'John Doe',
      status: 'approved',
      date: 'Mar 5, 2026',
      time: '10:00 AM'
    },
    {
      id: 'REF-2026-002',
      docName: 'Diploma Copy',
      requester: 'John Doe',
      status: 'ready',
      date: 'Feb 28, 2026',
      time: '2:00 PM'
    },
    {
      id: 'REF-2026-003',
      docName: 'Good Moral Certificate',
      requester: 'Jane Smith',
      status: 'pending',
      date: 'Mar 10, 2026',
      time: '11:00 AM'
    }
  ])

  const transactions = [
    { id: 'TXN-001', docName: 'Transcript of Records', ref: 'REF-2026-001', date: 'Feb 22, 2026', amount: 150, status: 'paid' },
    { id: 'TXN-002', docName: 'Good Moral Certificate', ref: 'REF-2026-002', date: 'Jan 10, 2026', amount: 200, status: 'paid' },
    { id: 'TXN-003', docName: 'Certificate of Enrollment', ref: 'REF-2025-089', date: 'Nov 3, 2025', amount: 150, status: 'paid' }
  ]

  return { alumniUser, staffUser, documents, alumniRequests, staffRequests, transactions }
}
