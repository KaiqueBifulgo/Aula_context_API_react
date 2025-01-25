// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// REFATORANDO COM HOOK
import { useCounterContext} from "../hooks/useCounterContext"

// CONTEXTO COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Nomes = () => {
  const {counter} = useCounterContext()

  const { color } = useTitleColorContext();

  return (
    <div> 
        <h1 style={{color: color}}>Nomes</h1>
        <p>Valor do contador: {counter} </p>
    </div>
  )
}

export default Nomes