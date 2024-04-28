import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className='myName'>SUN TAE YOUNG</span>
      <div className='navLinks'>
        <Link to="/" className='navbarList homeNav'>HOME</Link>
        <Link to="/about" className='navbarList aboutNav'>ABOUT ME</Link>
        <Link to="/project" className='navbarList projectNav'>PROJECT</Link>
        <Link to="/contact" className='navbarList contactNav'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Navbar;