import useCustomers from "../../hooks/useCustomers"
import DropDown from "../ui/DropDown"
import { useFormStore, usePopupStore, useShowListStore } from "../../store";
import LineItems from "../ui/LineItems";

const InvoiceForm = () => {
    const { customers } = useCustomers();  
    const form = useFormStore(state => state.form);
    const resetForm = useFormStore(state => state.resetForm);
    const lineItems = useFormStore(state => state.form.line_items)
    const {setShowList} = useShowListStore(state => state);
    const setPopup = usePopupStore(state => state.setPopup);
    


      async function createInvoice(){
        if(form.line_items.length > 0){
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
    } 


    return (
    <form className="m-4 p-2 py-6" onSubmit={e => e.preventDefault()}>
        <div>
            <DropDown 
                options={customers}
                label={'customer_name'}
                IDLabel={'contact_id'}
            />
        <div className='flex'>
            <button 
                className='p-2 px-4 bg-blue-500 text-lg text-white rounded m-2 ml-auto cursor-pointer'
                onClick={()=> setShowList(true)}
            >
              Add Item
            </button>
    
        </div>

        <LineItems lineItems={lineItems}/>


        </div>
        <div className="flex">
            <button 
                className='p-2 px-12 bg-blue-500 text-xl text-white rounded m-auto cursor-pointer'
                
                onClick={async() =>{ 
                  await createInvoice()
                  resetForm();
                }}
            >
                Submit
            </button>
        </div>

    </form>
  )
}

export default InvoiceForm