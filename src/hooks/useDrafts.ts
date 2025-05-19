// hooks/useDrafts.ts
import { useEffect, useState } from 'react'


export type Draft = {
    customer_name: string;
    total: number;
    invoice_number: string;
    date: string;
}

function useDrafts() {
  const [drafts, setDrafts] = useState<Draft[]>([])
  const [loading, setLoading] = useState(true)

  

  useEffect(() => {
    fetch('https://order-manager-api-yz7t.onrender.com/api/invoices')
            .then((res) => res.json())
            .then((data) => {
                setDrafts(data)        
                setLoading(false)

            })
    }, [loading])

  return { drafts, loading, setLoading }
}


export default useDrafts;