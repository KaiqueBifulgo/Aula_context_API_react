// eslint-disable-next-line no-unused-vars
import { children, createContext, useReducer } from "react";

import PropTypes from "prop-types"

// eslint-disable-next-line react-refresh/only-export-components
export const TitleColorContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const titleColorReducer = (state, action) => {

    switch(action.type) {

        case "RED":
            return {...state, color: "red"}
        case "BLACK":
            return {...state, color:"black"}
        case "GREEN":
            return {...state, color:"green"}
        default:
            return state;        
    }
}

export const TileColorContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "blue"})

    return (
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )

}

TileColorContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}