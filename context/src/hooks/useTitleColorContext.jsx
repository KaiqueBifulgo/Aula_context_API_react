import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)

    if(!context) {
        alert("Contexto não encontrado")
    }

    return context;
}