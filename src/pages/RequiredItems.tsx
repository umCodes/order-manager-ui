import { useState, useEffect } from 'react';

interface Item {
  id: string;
  name: string;
  description: string;
  quantity: number;
}

function RequiredItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://order-manager-api-yz7t.onrender.com/api/draftitems')
      .then((res) => res.json())
      .then((data: { items: Item[] }) => {
        setItems(data.items);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">Loading items...</p>
      </div>
    );
  }

  return (
    <div className="p-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <h2 className="text-xl font-semibold text-blue-700">{item.description}</h2>
          <p className="text-gray-700 mt-1">{item.name}</p>
          <p className="mt-2 text-gray-600">Quantity: <span className="font-medium">{item.quantity}</span></p>
        </div>
      ))}
    </div>
  );
}

export default RequiredItems;