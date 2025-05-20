import CreateInvoice from "../../pages/CreateInvoice"
import Drafts from "../../pages/Drafts"
import { useNavigate } from "../../store"
import Popup from "../ui/Popup";

const Body = () => {
    const location = useNavigate((state) => state.location);

    return (
        <div className="overflow-x-scroll bg-gray-100">
            <div style={{
                display: location === "createInvoice" ? '' : 'none'
            }}>
                <CreateInvoice />
            </div>
            <div style={{
                display: location === "drafts" ? '' : 'none'
            }}>
                <Drafts />
            </div>

            <Popup/>
        </div>
    )
}

export default Body