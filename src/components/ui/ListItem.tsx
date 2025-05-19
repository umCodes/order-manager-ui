import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useFormStore } from "../../store";
import type { LineItem } from "../../store";
import type { Item } from "../../types/types";

type ListItemProp = {
  item: Item;
}

const ListItem = ({item}: ListItemProp) => {

  const defaultForm: LineItem = {
    item_id: item.item_id,
    item_name: item.item_name,
    unit: item.unit,
    quantity: 1,
    rate: item.rate,
    description: item.description
  }

  const  setLineItems = useFormStore(state => state.setLineItems)
  const  form = useFormStore(state => state.form)
  const [formItem, setFormItem] = useState<LineItem>(defaultForm)
  const [expand, setExpand] = useState(false);

  
  const toggleExpand = () => {
    setFormItem(defaultForm)
    setExpand(!expand)
  };

  const addItemHandler = () =>{

    setLineItems(formItem)
    toggleExpand()
    console.log(form);

  }
  
  return (
    <div 
      className="m-2"
      >
        <div
          className="flex items-center justify-between shadow rounded-t-md p-4 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
          onClick={toggleExpand}

        >
          <h3 className="font-bold text-md">
              {item && item.item_name}
          </h3>
          <p>
              {item && item.rate} SAR/
              {item && item.unit}
          </p>

        </div>

        <form onSubmit={e => e.preventDefault()}
        className="bg-gray-100  transition-all duration-200 overflow-hidden flex flex-col justify-center"
          style={{
            height: expand? '240px' :'0',
            padding: expand? '8px' :'0'
          }}
        >
          <div className="m-2 flex justify-between font-bold text-gray-700">
            <label htmlFor="rate">Rate: </label>
            <input 
              value={formItem.rate} 
              onChange={e => setFormItem({...formItem, rate: Number(e.target.value)}) }
              type="number" 
              id="rate"
              className="bg-white text-lg text-center border border-gray-400 rounded w-16 p-1"

            />

          </div>
          <div className="m-2 flex justify-between font-bold text-gray-700">
            <label htmlFor="quantity">Quantity: </label>
            <input 
              value={formItem.quantity} 
              onChange={e => setFormItem({...formItem, quantity: Number(e.target.value)}) }   
              type="number" 
              id="quantity" 
              className="bg-white text-lg text-center border border-gray-400 rounded w-16 p-1" 
              
              />
          </div>
          <div className="m-2 flex justify-between font-bold text-gray-700">
            <label htmlFor="description">Description: </label>
            <input 
              value={formItem.description} 
              onChange={e => setFormItem({...formItem, description: e.target.value}) }   
              type="text" 
              id="description" 
              className="bg-white text-lg border border-gray-400 rounded w-46 p-1" 
              
              />
          </div>
          <div className="flex justify-end">
            <button 
              onClick={addItemHandler}
              className="p-2 m-2 border rounded-md bg-blue-500 text-white">
              <FontAwesomeIcon icon={faAdd}/> Add Item
            </button>
          </div>
        </form>
    </div>
  )
}

export default ListItem