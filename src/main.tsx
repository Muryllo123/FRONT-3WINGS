import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Remedios from './components/Remedios.tsx'
import New from './components/New.tsx'
import Sobre from './components/Sobre.tsx'
import Ler from './components/Ler.tsx'
import Atualizar from './components/Atualizar.tsx'


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Remedios />,
      },
      {
        path: "/novo",
        element: <New />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/item/:id",
        element: <Ler/>
      },
         
      {
        path: "/item/:id/edit",
        element: <Atualizar />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
