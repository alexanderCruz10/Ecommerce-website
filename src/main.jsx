import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog.jsx'

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

const routerr = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/blog",
      element: <Blog/>
    }]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={routerr} />
)
