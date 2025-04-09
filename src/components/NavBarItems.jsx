import { useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/logo/logo.png'

const NavBarItems = () => {
 const [menuToggle, setMenuToggle] = useState(false)
  const [soicalToggle, setSocialToggle] = useState(false)
  const [headerFixed, setHeaderFixed] = useState(false)

  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
      setHeaderFixed(true)
    }else{
      setHeaderFixed(false)
    }
  })

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp": " "}`} > 
      {/*top part*/}
      <div className={`header-top d-sm-none ${soicalToggle ? "open" : " "}`}> 
        <div className='container'> 
          <div className='header-top-area'>
            <Link to={"/signup"} className='lab-btn me-3'> Create Account</Link>
            <Link to={"/login"}> Log In</Link>
          </div>
        </div>
      </div>

    {/*bottom part*/}
    <div className='header-bottom'>
      <div className='container'>
        <div className='header-wrapper'>
          
          {/* logo */}
          <div className='logo-search-acte'>
            <div className='logo'>
              <Link to={"/"}>
              <img src={logo} alt='logo picture'/>
              </Link>
            </div>
          </div>

          {/* menu area */}
          <div className="menu-area">
            <div className="menu">
              <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                <li> <Link to={"/"}> Home</Link></li>
                <li> <Link to={"/"}> Shop</Link></li>
                <li> <Link to={"/"}> Blog</Link></li>
                <li> <Link to={"/"}> About</Link></li>
                <li> <Link to={"/"}> Contact</Link></li>
              </ul>
            </div>

            {/* Access account */}
            <Link to={"/sign-up"} className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
            <Link to={"/login"} className='d-none d-md-block'> Log In</Link>


            {/* menu toggler*/}
            <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" :""}`}>
              <span/>
              <span/>
              <span/>
            </div>

            {/* social toggler */}
            <div className='ellepsis-bar d-md-none' onClick={()=> setSocialToggle(!soicalToggle)}>
              <i className="icofont-info-circle"/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </header>
  )
}

export default NavBarItems

