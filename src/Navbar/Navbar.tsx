import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
       <h3 style={{color: '#252b42'}}>Bandage</h3>
       </div>

      <div className="navlinks-navfunc">
       <div className="navlinks">
        <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">Shop</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Blog</a></li>
         <li><a href="#">Contact</a></li>
         <li><a href="#">Pages</a></li>
        </ul>
       </div>
       <div className="navfunc">
        <div className="login">
          <h4 className='login-text'>Login / Register</h4>
        </div>
        <div className="navfunc-icons"></div>
      
       </div>
      </div>
    </div>
  )
}

export default Navbar
