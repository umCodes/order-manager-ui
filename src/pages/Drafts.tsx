import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DraftCard from "../components/ui/DraftCard";
import useDrafts from "../hooks/useDrafts"
import { faRotateBack } from "@fortawesome/free-solid-svg-icons";


function Drafts() {
    const {drafts, loading, setLoading} = useDrafts();



  return (
    <>
    <div className="text-lg flex px-2">
        <button 
            onClick={() => setLoading(true)}
            className="ml-auto p-2 text-blue-600 flex items-center gap-1">
            <FontAwesomeIcon 
                icon={faRotateBack}
            /> Refresh
        </button>
    </div>
    <div>
         {loading ? <div className="flex 
         text-xl text-gray-400 font-semibold 
         items-center justify-center">Loading...</div> : 
         drafts.length > 0 ? drafts.map(draft => <DraftCard draft={draft} key={draft.invoice_number}/>) :  <div className="flex 
         text-xl text-gray-400 font-semibold 
         items-center justify-center">No Drafts Created Yet</div>
        }    
    </div>
    </>
  )
}

export default Drafts