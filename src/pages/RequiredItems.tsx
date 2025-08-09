import { useState, useEffect } from 'react';
import { useNavigate } from '../store';

interface Item {
  item_id: string;
  name: string;          // or `item_name` depending on API response
  description: string;   // Amharic name prioritized?
  quantity: number;
}

function RequiredItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useNavigate((state) => state.location);

  useEffect(() => {
    
      fetch('https://order-manager-api-yz7t.onrender.com/api/draftitems')
        .then((res) => res.json())
        .then((data: Item[]) => {
          setItems(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching items:', err);
          setLoading(false);
        });
    
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading items...</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.item_id}
          className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition-shadow bg-white"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-1">{item.description}</h2>
          <p className="text-sm text-gray-600 mb-2">{item.name}</p>
          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default RequiredItems;