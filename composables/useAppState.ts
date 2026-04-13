// composables/useAppState.ts
export const useAppState = () => {
  const role = useState<'alumni' | 'staff'>('role', () => 'alumni')
  
  const currentRequest = useState('currentRequest', () => ({
    document: null as any,
    date: '',
    time: ''
  }))

  return { role, currentRequest }
}
