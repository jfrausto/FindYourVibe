import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// import "./styles/Navbar.css";
import "./styles/Navbar2.css";

export default function NavMenu() {
  const history = useHistory();
  const { logout } = useAuth()

  function handleSignupButton() {
    try {
      history.push("/signup")
    } catch (error) {
      console.log(error)
    }
  }

  function handleLoginButton() {
    try {
      history.push("/login")
    } catch (error) {
      console.log(error)
    }
  }

  async function handleLogoutButton() {
    try {
      await logout()
      history.push("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="bunnies"
        id="navbar"
      >
        <Navbar.Brand href="/">
          <i className="fab fa-forumbee" />
          ViBee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Nav className="ml-auto">
            <Link className="nav-items" to="/">
              Home
            </Link>
            <Link className="nav-items" to="/profile">
              Profile
            </Link>
            <Link className="nav-items" to="/collection">
              My Collection
            </Link>
            <Button onClick={handleSignupButton} className="btn--outline">Sign Up</Button>{" "}
            <Button onClick={handleLoginButton} className="btn--outline">Log In</Button>
            <Button onClick={handleLogoutButton} className="btn--outline">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

// export default function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="navbar-logo">
//             <i className="fab fa-forumbee" /> ViBee
//           </Link>
//           <div className="menu-icon" onClick={handleClick}>
//             <i className={click ? "fas fa-times" : "fas fa-bars"} />
//           </div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 to="/profile"
//                 className="nav-links"
//                 onClick={closeMobileMenu}
//               >
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/signup"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/login"
//                 className="nav-links-mobile"
//                 onClick={closeMobileMenu}
//               >
//                 Log In
//               </Link>
//             </li>
//           </ul>
//           {button && (
//             <Link to="/signup" className="btn-mobile">
//               <button className="btn btn--outline">Sign Up</button>
//             </Link>
//           )}
//           {button && (
//             <Link to="/login" className="btn-mobile">
//               <button className="btn btn--outline">Log In</button>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavMenu;
// export default Navbar;
