import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
// import "./styles/Navbar.css";
import "./styles/Navbar2.css";

function NavMenu() {
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
            <Nav.Link className="nav-items" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-items" href="/profile">
              Profile
            </Nav.Link>
            <Button className="btn--outline">Sign Up</Button>{" "}
            <Button className="btn--outline">Log In</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

// function Navbar() {
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

export default NavMenu;
// export default Navbar;