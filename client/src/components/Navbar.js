import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
// import "./styles/Navbar.css";
import "./styles/Navbar2.css";

export default function NavMenu() {
  const history = useHistory();
  const { currentUser } = useAuth();
  const { logout } = useAuth();

  function handleSignupButton() {
    try {
      history.push("/signup");
    } catch (error) {
      console.log(error);
    }
  }

  function handleLoginButton() {
    try {
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogoutButton() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <Navbar
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
        <Navbar.Collapse id="responsive-navbar-nav"> */}
      {/* <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
      {/* <Nav className="ml-auto">
            <Link className="nav-items" to="/dashboard">
              Dashboard
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
      </Navbar> */}

      <Navbar
        className="m-0 custom-nav"
        bg="dark"
        variant="dark"
        id="navbar"
        expand="md"
      >
        <Navbar.Brand className="btn--outline" as={Link} to="/">
          <i className="fab fa-forumbee" />
          <span className="logo">ViBee</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="mx-0 nav-link btn--outline"
              as={Link}
              to={"/dashboard"}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              className="mx-0 nav-link btn--outline"
              as={Link}
              to={"/profile"}
            >
              Profile
            </Nav.Link>
            {currentUser && (
              <Nav.Link
                className="mx-0 nav-link btn--outline"
                as={Link}
                to={"/collection"}
              >
                My Collection
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav.Link
                className="btn--outline"
                as={Button}
                onClick={handleSignupButton}
              >
                Sign Up
              </Nav.Link>
            )}
            {!currentUser && (
              <Nav.Link
                className="btn--outline"
                as={Button}
                onClick={handleLoginButton}
              >
                Log In
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-in-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Nav.Link>
            )}
            {currentUser && (
              <Nav.Link
                className="btn--outline"
                as={Button}
                onClick={handleLogoutButton}
              >
                Log Out
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-box-arrow-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Nav.Link>
            )}
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
