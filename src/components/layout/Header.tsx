import { useNavigate } from "../../store";

const Header = () => {
  const {location} = useNavigate((state) => state);

  return (
    <div className="
        flex items-center 
        border border-gray-200 
      bg-white 
        text-2xl text-gray-700 font-bold 
        p-2"
        >

        {location === "createInvoice" ? 'Create Invoice' : 'Drafts'}
    </div>
  )
}

export default Header