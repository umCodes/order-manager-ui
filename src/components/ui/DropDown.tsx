import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useFormStore } from "../../store"; 

type DropDownProp<T> = {
    options: T[] | null;
    label: keyof T;
    IDLabel: keyof T;
     
};



const DropDown = <T,>({options, label, IDLabel}: DropDownProp<T>) => {

    const [expand, setExpand] = useState(false);
    const [value, setValue] = useState<T | null>(null);
    const setCustomerId = useFormStore(state => state.setCustomerId)
    const toggleExpand = () => setExpand(!expand);
    
    return (
    <div className="relative w-[95%] m-2 bg-white border border-gray-300 rounded mx-auto">    
    <div 
        
        className="flex items-center justify-between gap-2 p-3"
        onClick={toggleExpand}
    >
        
        <input 
            value={value ? String(value[label]) : ""}
            type="text" 
            placeholder="Select Customer"
            readOnly
            className="outline-0 cursor-default text-md"
        />

        <FontAwesomeIcon icon={faCaretDown}/>
    </div>


    <div 
        className='absolute bg-white flex flex-col overflow-y-scroll transition-all h-fit w-full'
        style={{
            maxHeight: expand ? '280px' : '0',
        }}
    >
        {options && options.map((option) => {
            return (<button 
                        style={{
                            backgroundColor: (value && (option[IDLabel] === value[IDLabel])) ? 'skyblue' : ''
                        }}
                        className="p-3 text-left"
                        key={String(option[IDLabel])}
                        onClick={() => {
                            setCustomerId(String(option[IDLabel]));
                            setValue(option);
                            toggleExpand();
                        }}
                    >
                        {String(option[label])}
                    </button>)
        })}

    </div>
    </div>
  )
}

export default DropDown