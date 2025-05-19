import { faClock, faReceipt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "../../store";

const Footer = () => {
  const {location, setCreateInvoice, setDrafts} = useNavigate((state) => state);
  

  const buttonStyle = "p-3 flex flex-col w-full m-1"
  return (
    <div className="
        items-center
        border border-gray-200 
        bg-white 
        ">
        <nav className="flex items-center">
            <button 
              className={buttonStyle}
              style={{
                color: location === 'createInvoice' ? 'blue' : ''
              }}
              onClick={setCreateInvoice}
            >
              <FontAwesomeIcon icon={faReceipt}/>
              Create Invoices
            </button>
            <button               
              className={buttonStyle}
              style={{
                color: location === 'drafts' ? 'blue' : ''
              }}
              onClick={setDrafts}

            >
              <FontAwesomeIcon icon={faClock}/>
              Drafts

            </button>
        </nav>
    </div>
  )
}

export default Footer