import useCustomers from "../../hooks/useCustomers"
import DropDown from "../ui/DropDown"
import { useFormStore, usePopupStore, useShowListStore } from "../../store";
import LineItems from "../ui/LineItems";
import { useState } from "react";

const InvoiceForm = () => {
    const { customers } = useCustomers();  
    const form = useFormStore(state => state.form);
    const resetForm = useFormStore(state => state.resetForm);
    const toggleForToday = useFormStore(state => state.toggleForToday);
    const lineItems = useFormStore(state => state.form.line_items)
    const {setShowList} = useShowListStore(state => state);
    const setPopup = usePopupStore(state => state.setPopup);
    const [submiting, setSubmiting] = useState(false);    


      async function createInvoice(){
        if(form.line_items.length > 0){
          setSubmiting(true)
          try {
              await fetch('https://order-manager-api-yz7t.onrender.com/api/invoice', {
                method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
              })
              setPopup({
                    message: `Invoice create`,
                    success: true
              })
          
              } catch (error) {
                  console.error('Error Getting Customers: ', error);
                  setPopup({
                    message: `Problem creating invoice, please check your connection`,
                    success: false
              })
          
                  
              }
          }else {
            setPopup({
              message: "No items included",
              success: false
            })
          }

          setSubmiting(false)
    } 


    return (
    <form className="m-4 p-2 py-6" onSubmit={e => e.preventDefault()}>
        <div>
            <DropDown 
                options={customers}
                label={'customer_name'}
                IDLabel={'contact_id'}
            />
        <div className='flex items-center justify-between px-2'>

        

            <label className='flex items-center justify-between'>
                <input 
                    type="checkbox"
                    checked={form.forToday}
                    onChange={toggleForToday}
                />
                <span p className="px-2">For Today</span>
            </label>

        
                
            
            <button 
                className='p-2 px-4                
                            text-lg text-blue-600 underline
                            active:text-blue-700
                            ml-auto cursor-pointer'
                onClick={()=> setShowList(true)}
            >
              Add Item
            </button>
    
        </div>

        <LineItems lineItems={lineItems}/>


        </div>
        <div className="flex">
            <button 
                className='w-70 h-12 px-6  bg-blue-600 active:bg-blue-700 text-xl text-white rounded-lg m-auto cursor-pointer'
                
                onClick={async() =>{ 
                  await createInvoice()
                  resetForm();
                }}
            >
                
                {submiting ? <p className="text-gray-200 animate-pulse">Submiting...</p>: "Submit" }
                
            </button>
        </div>

    </form>
  )
}

export default InvoiceForm
