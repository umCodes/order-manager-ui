import { useEffect, useState } from "react"
import { usePopupStore } from "../../store";

const Popup = () => {
  const [show, setShow] = useState(false);
  const popup = usePopupStore(state => state.popup);

  useEffect(()=>{
    if(popup.message){
          setTimeout(()=> {
            setShow(true)
          }, 1000);

          setTimeout(()=> {
            setShow(false)
          }, 4000);
    }
  },[popup])


  return (
    <div 
    className="
        min-w-[100px] 
        absolute left-1/2 
        transform -translate-x-1/2 -translate-y-1/2
        text-center text-white text-lg
        p-2 rounded
        transition-all
        duration-200


    "
    style={{
        backgroundColor: popup.success ? '#3B82F6': '#ff424f',
        bottom: show? '10%': '0',
        opacity: show? '1' : '0'
        }}
    >
        {popup.message}
    </div>
  )
}

export default Popup