import ListItem from "./ListItem";
import useItems from "../../hooks/useItems";
import type { Item } from "../../types/types";
import { useShowListStore } from "../../store";

function List() {
    const {items} = useItems();
    const {showList, setShowList} = useShowListStore(state => state);


    return (
    <div 
      className="w-full absolute bg-gray-50 h-[80dvh] bottom-0  rounded-md overflow-hidden transition-all duration-200 ease-in-out"
      style={{
        transform: showList ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'bottom', 
        boxShadow: '-2px 3px 8px',
      }}
      >
        

      <div className="flex items-center justify-between p-4 ">
      <h3 className="text-2xl text-gray-700 font-bold">Items</h3>
      <button
        className="text-lg text-blue-500"
        onClick={() => {
            setShowList(false);
        }}
      >
        Cancel
      </button>
      </div>
        <div 
          className='overflow-y-scroll h-[90%]'
        >
          {items && 
          items.map((item: Item) => 
          (<ListItem key={item.item_id} item={item}/>))        }

        </div>
    </div>
  )
}

export default List