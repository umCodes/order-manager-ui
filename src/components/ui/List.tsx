import ListItem from "./ListItem";
import useItems from "../../hooks/useItems";
import type { Item } from "../../types/types";
import { useShowListStore } from "../../store";

function List() {
    const {items} = useItems();
    const {showList, setShowList} = useShowListStore(state => state);


    return (
    <div 
      className="w-full absolute bg-gray-50 h-[70%] bottom-0 overflow-hidden transition-all duration-200 ease-in- z-100"
      style={{
        transform: showList ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'bottom', 
        boxShadow: '-1px 2px 4px',
      }}
      >
        

      <div className="flex items-center justify-between p-4 ">
      <h3 className="text-2xl text-gray-800 font-bold">Items</h3>
      <button
        className="text-lg text-blue-700"
        onClick={() => {
            setShowList(false);
        }}
      >
        Cancel
      </button>
      </div>
        <div 
          className='overflow-y-scroll h-[90%]  pb-16'
        >
          {items && 
          items.map((item: Item) => 
          (<ListItem key={item.item_id} item={item}/>))        }

        </div>
    </div>
  )
}

export default List