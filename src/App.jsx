import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element:<Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "contact",
          element:<Contact/>
        },
        {
          path: "404",
          element:<NotFound/>
        }
      ]
    }
  ])

  return (


    <RouterProvider router={router} />
    
    
  )
}

export default App
