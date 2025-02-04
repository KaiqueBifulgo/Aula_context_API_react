import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './routes/Home.jsx'
import Nomes from './routes/Nomes.jsx'


// CRIANDO O PROVIDER
import { CounterContextProvider } from './context/CounterContext.jsx'

// CONTEXT MAIS COMPLEXO
import { TileColorContextProvider } from './context/TitleColorContext.jsx'

//CONFIGURANDO ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "nomes",
        element: <Nomes/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TileColorContextProvider>
         <RouterProvider router={router} />
      </TileColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
