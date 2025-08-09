import {useState} from 'react';

function RequiredItems(){
  const [items, setitems] = useState([])
  const [loading, setLoading] = useState(true)

  

  useEffect(() => {
    fetch('https://order-manager-api-yz7t.onrender.com/api/draftitems')
            .then((res) => res.json())
            .then((data) => {
                setItems(data)        
                setLoading(false)

            })
    }, [loading])


  return (
    <div>
      {/* Your content will go here */}
    </div>
  );
};

export default RequiredItems;