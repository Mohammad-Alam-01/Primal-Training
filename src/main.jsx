import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Reserve from './Components/Reserve_ur_spot/Reserve.jsx'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/reserve',
        element:<Reserve/>
      }
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
