import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog.jsx'
import Shop from './pages/Shop/Shop.jsx'
import SingleProduct from './pages/Shop/SingleProduct.jsx'
import CartPage from './pages/Shop/CartPage.jsx'
import SingleBlog from './pages/Blog/SingleBlog.jsx'
import About from './pages/AboutPage/About.jsx'
import Contact from './pages/ContactPage/Contact.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import SignUp from './components/SignUp.jsx'
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
    }, 
    {
      path: "/blog/:id",
      element: <SingleBlog/>
    },
    {
      path: "/shop",
      element: <Shop/>
    },
    {
      path: "shop/:id",
      element: <SingleProduct/>
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    {
      path:"/cart-page",
      element:<PrivateRoute><CartPage/></PrivateRoute>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/sign-up",
      element: <SignUp/>
    },
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={routerr} />
  </AuthProvider>
)
