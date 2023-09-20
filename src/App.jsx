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
import Haber from './pages/Haber/Haber'
import HaberDetay from './pages/HaberDeday/HaberDetay'
import Iletisim from './pages/Iletisim/Iletisim'
import Kaynaklar from './pages/Kaynaklar/Kaynaklar'




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
          path: "haber",
          element: <Haber />,
        },
        {
          path: "haberDetay",
          element: <HaberDetay />,
        },
        {
          path: "iletisim",
          element: <Iletisim />,
        },
        {
          path: "kaynaklar",
          element: <Kaynaklar />,
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
