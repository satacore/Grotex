import { useState } from "react";
import { createContext } from "react";

export const handleContext = createContext()

const Provider = (props) => {
    const [hideButtons, setHideButtons] = useState(false);
    const handleClick = () => {
        setHideButtons(true);
      }
    return(
        <handleContext.Provider value={{hideButtons, handleClick, setHideButtons}}>{props.children}</handleContext.Provider>

    )
}

export default Provider
