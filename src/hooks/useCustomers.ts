// hooks/useCustomers.ts
import { useEffect, useState } from 'react'
import type { Customer } from '../types/types'


function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://order-manager-api-yz7t.onrender.com/api/customers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data)
        setLoading(false)
      })
  }, [])

  return { customers, loading }
}


export default useCustomers;