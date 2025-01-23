// eslint-disable-next-line no-unused-vars
import { children, createContext, useReducer } from "react";

import PropTypes from "prop-types"

// eslint-disable-next-line react-refresh/only-export-components
export const TileColorContext = createContext();

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
    // eslint-disable-next-line no-unused-vars
    const [state, dispath] = useReducer(titleColorReducer, {color: "blue"})

    return (
        <TileColorContext.Provider value={{...state}}>
            {children}
        </TileColorContext.Provider>
    )

}

TileColorContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}