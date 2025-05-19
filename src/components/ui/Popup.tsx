import { useEffect, useState } from "react"
import { usePopupStore } from "../../store";

const Popup = () => {
  const [position, setPosition] = useState('0');
  const popup = usePopupStore(state => state.popup);

  useEffect(()=>{
    if(popup.message){
          setTimeout(()=> {
            setPosition('10%')
          }, 1000);

          setTimeout(()=> {
            setPosition('0')
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
        bottom: position,
        }}
    >
        {popup.message}
    </div>
  )
}

export default Popup