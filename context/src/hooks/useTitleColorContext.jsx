import { useContext } from "react";
import { TileColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TileColorContext)

    if(!context) {
        alert("Contexto não encontrado")
    }

    return context;
}