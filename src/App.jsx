import { Outlet } from 'react-router'
import './App.css'
import NavBarItems from './components/NavBarItems'

function App() {

  return (
    <>
      <NavBarItems/>
      <Outlet/>
    </>
  )
}

export default App
