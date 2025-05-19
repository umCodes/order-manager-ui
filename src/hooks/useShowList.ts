import { useState } from "react"

const useShowList = () => {

    const [showList, setShowList] = useState(false);   
  
    return {showList, setShowList}

}

export default useShowList