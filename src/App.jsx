import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
import Kurumsal from './pages/Kurumsal/Kurumsal'
import Uygulamalar from './pages/Uygulamalar/Uygulamalar'
import Urunler from './pages/Urunler/Urunler'
import UrunDetay from './pages/UrunDetay/UrunDetay'




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "kurumsal",
          element: <Kurumsal />,
        },
        {
          path: "uygulamalar",
          element: <Uygulamalar />,
        },
        {
          path: "urunler",
          element: <Urunler />,
        },
        {
          path: "urunDetay",
          element: <UrunDetay />,
        },
        {
          path: "404",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (


    <RouterProvider router={router} />
    
    
  )
}

export default App
