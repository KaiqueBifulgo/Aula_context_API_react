import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if(!context) {
        alert("Contexto não encontrado!");

        return;
    }

    console.log(context);

    return context;
}