// hooks/useItems.ts
import { useEffect, useState } from 'react'
import type { Item } from '../types/types'


function useItems() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://order-manager-api-yz7t.onrender.com/api/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
  }, [])

  return { items, loading }
}


export default useItems;