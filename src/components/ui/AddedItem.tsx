import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFormStore, type LineItem } from "../../store"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const AddedItem = ({item}: {item: LineItem}) => {
    const removeLineItem = useFormStore(state => state.removeLineItem)


    return (
    <div>
        <div className='flex items-center justify-between m-2'>
            <div className='flex items-center justify-between p-4 w-[90%]'>
            <h3 className='font-bold text-lg text-gray-700'>
                {item.item_name} ({item.quantity}{item.unit})
            </h3>

            <p className='font-semibold text-gray-700'>              
                SAR{Number(item.rate) * Number(item.quantity)}
            </p>
            </div>
            <button 
                onClick={() => removeLineItem(item)}
                className='m-auto text-lg text-red-500 p-4'>
                <FontAwesomeIcon icon={faTrash}/>
            </button>

        </div>
    </div>
  )
}

export default AddedItem