import type { Draft } from "../../hooks/useDrafts"
import { usePopupStore } from "../../store";
import { addPayment } from "../../services/payments"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"
import useDrafts from "../../hooks/useDrafts"


const DraftCard = ({draft}: {draft: Draft}) => {
  const setPopup = usePopupStore(state => state.setPopup);
  const {setLoading} = useDrafts();
  
  async function handleDraftPayment(){
    try{
      await addPayment(draft);
      setPopup({
        message: `payment recieved for ${draft.invoice_number}`,
        success: true
      })      
      setLoading(true);
    }catch(error){
      console.error(error);      
      setPopup({
        message: 'An error occured making payment, please try again.',
        success: false
      })
    }
  }
  return ( 
            <div className="flex items-center justify-between border-2 border-gray-200 m-3 p-2 rounded-md bg-white">
                <div>                
                    <h3 className="text-lg font-bold">{draft.customer_name}</h3>
                    <p className="text-gray-700">
                        <span className="font-semibold ">{draft.invoice_number}</span> - {draft.date}
                    </p>
                </div>

                <div>                
                    <span className="font-bold">
                        SAR{draft.total}
                    </span>
                </div>
              <button
                onDoubleClick={handleDraftPayment}
                className="ml-4 p-2 text-sm text-green-700 hover:text-green-900 transition-colors"
                title="Add Payment"
              >
                <FontAwesomeIcon icon={faMoneyBillWave} size="lg" />
              </button>
        </div>)
}

export default DraftCard
