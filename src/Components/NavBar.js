import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css';


const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/about"
    >
      About
    </NavLink>
  </nav>
);

export default Navbar;

// class NavBar extends Component {
//   render() {
//     return (
//       <header>
//         <ul id="headerButtons">
//           <div className="navButton"><Link to="">Home</Link></div>
//           <div className="navButton"><Link to="">About</Link></div>
//         </ul>
//       </header>
//     )
//   }
// }
// export default NavBar;