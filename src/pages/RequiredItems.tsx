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
      .then((data: Item[]) => {
        setItems(data);
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
      <div>
        <p>Loading items...</p>
      </div>
    );
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.description}</h2>
          <p>{item.name}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default RequiredItems;
