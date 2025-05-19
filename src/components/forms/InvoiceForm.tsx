import useCustomers from "../../hooks/useCustomers"
import DropDown from "../ui/DropDown"
import { useFormStore, useShowListStore } from "../../store";
import LineItems from "../ui/LineItems";

const InvoiceForm = () => {
    const { customers } = useCustomers();  
    const form = useFormStore(state => state.form);
    const resetForm = useFormStore(state => state.resetForm);

    const lineItems = useFormStore(state => state.form.line_items)
    const {setShowList} = useShowListStore(state => state);


      async function createInvoice(){
      try {
            console.log(form);
            
          const request = await fetch('https://order-manager-api-yz7t.onrender.com/api/invoice', {
            method: 'POST',
              headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
          })

          const data = await request.json();
          console.log(data);
          
      } catch (error) {
          console.error('Error Getting Customers: ', error);
          
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