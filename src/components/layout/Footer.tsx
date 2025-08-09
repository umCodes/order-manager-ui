import { faClock, faReceipt, faClipboardList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "../../store";

const Footer = () => {
  const { location, setCreateInvoice, setDrafts, setRequiredItems } = useNavigate((state) => state);
  
  const buttonStyle = "p-3 flex flex-col w-full m-1 items-center justify-center";

  return (
    <div className="items-center border border-gray-200 bg-white pb-4 z-10">
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

        <button               
          className={buttonStyle}
          style={{
            color: location === 'requiredItems' ? 'blue' : ''
          }}
          onClick={setRequiredItems}
        >
          <FontAwesomeIcon icon={faClipboardList}/>
          Required Items
        </button>
      </nav>
    </div>
  );
}

export default Footer;