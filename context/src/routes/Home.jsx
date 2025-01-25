// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

// REFATORANDO COM HOOK
import { useCounterContext} from "../hooks/useCounterContext"

// CONTEXTO COMPLEXO
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  // const {counter} = useContext(CounterContext)

  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

// ALTERANDO CONTEXTO COMPLEXO
  const setTitleColor = (color) => {
      dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>

      {/* ALTERANDO CONTEXTO COMPLEXO */}
      <div>
        <button onClick={() => setTitleColor("RED")}>
          Vermelho
        </button>
        <button onClick={() => setTitleColor("BLACK")}>
          Preto
        </button>
        <button onClick={() => setTitleColor("GREEN")}>
          Verde
        </button>
      </div>
    </div>
  )
}

export default Home