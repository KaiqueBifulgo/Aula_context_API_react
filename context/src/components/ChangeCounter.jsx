// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"

// REFATORANDO COM HOOK
import { useCounterContext} from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const { counter, setCounter } = useCounterContext();


  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
    </div>
  )
}

export default ChangeCounter