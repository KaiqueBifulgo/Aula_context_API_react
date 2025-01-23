// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

// REFATORANDO COM HOOK
import { useCounterContext} from "../hooks/useCounterContext"


const Nomes = () => {
  const {counter} = useCounterContext()

  return (
    <div> 
        <h1>Nomes</h1>
        <p>Valor do contador: {counter} </p>
    </div>
  )
}

export default Nomes