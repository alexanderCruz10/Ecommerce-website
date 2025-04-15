import { Outlet } from 'react-router'
import './App.css'
import NavBarItems from './components/NavBarItems'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBarItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
