// CRIAR CONTEXT
import { createContext, useState } from "react";
import PropTypes from "prop-types"

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext();

// CRIAR PROVIDER
export const CounterContextProvider = ({ children }) => {

    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )
}

CounterContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}
