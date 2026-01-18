// hooks/useCustomers.ts
import { useEffect, useState } from 'react'
import type { Customer } from '../types/types'


function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('`${VITE_API_URL}/api/customers`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data)
        setLoading(false)
      })
  }, [])

  return { customers, loading }
}


export default useCustomers;
