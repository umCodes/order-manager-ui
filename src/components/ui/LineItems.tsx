import type { LineItem } from "../../store"
import AddedItem from "./AddedItem"

const LineItems = ({lineItems}: {lineItems: LineItem[]}) => {
  return (
    <>
    <span className="p-2 text-gray-500 font-semibold">{lineItems.length} Items</span>  
    <div className="bg-white border-2 border-gray-200 rounded-lg my-4"> 
          <div>
            {lineItems && lineItems.map((item, i) => <AddedItem index={i} item={item} key={item.item_id + '01'}/>)}
            
            {lineItems.length > 0 && 
              <div className='border-t border-gray-300 m-4 p-4 flex items-center justify-between'>
                        <span className='font-bold text-xl text-gray-500'>Total:</span> <span className='font-bold text-lg'>
                          SAR{lineItems && lineItems.reduce((acc, item) => acc + (item.rate)*(item.quantity), 0)}</span>
              </div>
            }
        </div>
    </div>
  
    </>
  )
}

export default LineItems