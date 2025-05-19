import type { Draft } from "../../hooks/useDrafts"





const DraftCard = ({draft}: {draft: Draft}) => {
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
        </div>)
}

export default DraftCard