import type { Draft } from "../../hooks/useDrafts";
import { usePopupStore } from "../../store";
import { addPayment } from "../../services/payments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const DraftCard = ({
  draft,
  setLoading,
}: {
  draft: Draft;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const setPopup = usePopupStore((state) => state.setPopup);

  const handleDraftPayment = async () => {
    try {
      await addPayment(draft);
      setPopup({
        message: `Payment received for ${draft.invoice_number}`,
        success: true,
      });
      setLoading(true);
    } catch (error) {
      console.error(error);
      setPopup({
        message: "An error occurred while processing the payment.",
        success: false,
      });
    }
  };

  return (
    <div className="flex items-center justify-between border-2 border-gray-200 m-3 p-2 rounded-md bg-white">
      <div>
        <h3 className="text-lg font-bold">{draft.customer_name}</h3>
        <p className="font-semibold">{draft.invoice_number}</p>
        <p className="text-gray-700">{draft.date}</p>
      </div>

      <div className="mx-2 ml-auto">
        <span className="font-bold">SAR{draft.total}</span>
      </div>

      <button
        onDoubleClick={handleDraftPayment}
        className="cursor-pointer ml-4 p-2 text-sm text-green-700 hover:text-green-900 transition-colors"
        title="Add Payment"
      >
        <FontAwesomeIcon icon={faMoneyBillWave} size="lg" />
      </button>
    </div>
  );
};

export default DraftCard;