import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import '../Styles/Navbar.css'
  
const Navbar = () => {
  const hamburgerID = "menu";
  const navID = "navbar";

  function myFunction(id1, id2) {
    console.log("ID1, ID2: ", id1, id2);
    const elem1 = document.getElementById(id1);
    elem1.classList.toggle("change");
    const elem2 = document.getElementById(id2);
    elem2.classList.toggle("hideNav");
  }

  return (
    <>
      <div class="container" id={hamburgerID} onClick={() => {myFunction(hamburgerID, navID)}}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
      </div>

      <div id={navID} class="hideNav">
        <Nav>
          <NavMenu>
            <NavLink to="/Patient" activeStyle>
              Patient Assessment Checklist
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact Us
            </NavLink>
            <NavLink to="/" activeStyle>
              Home
            </NavLink>
            <NavLink to="/sign-up" activeStyle>
              Sign Up
            </NavLink>
          </NavMenu>
        </Nav>
      </div>
    </>
  );
};
  
export default Navbar;