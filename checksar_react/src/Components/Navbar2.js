import React from 'react'
import '../Styles/Navbar.css'
import Navbar from "./Navbar"

const Navbar2 = () => {
    return (
        <div class="container" id="menu" onClick={() => {myFunction("menu")}}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>

    );
}

function myFunction(x) {
    console.log("X", x);
    const elem = document.getElementById(x);
    elem.classList.toggle("change");
  }

export default Navbar2;