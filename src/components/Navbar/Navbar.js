import React from "react";
function Navbar() {
  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    nav.classList.toggle("stiky", window.scrollY > 0);
  });
  function montoggle() {
    const mnuetoggle = document.querySelector(".mnuetoggle");
    const navgation = document.querySelector(".links");
    mnuetoggle.classList.toggle("active");
    navgation.classList.toggle("active");
  }
  return (
    <header className="header" id="home">
      <nav className="nav cont">
        <div className="logo">
          <h2>
            PATO <span>.</span>
          </h2>
        </div>
        <div className="mnuetoggle" onClick={montoggle}></div>
        <ul className="links">
          <li>
            <a href="#home" onClick={montoggle}>
              home
            </a>
          </li>
          <li>
            <a href="#about" onClick={montoggle}>
              about
            </a>
          </li>
          <li>
            <a href="#menu" onClick={montoggle}>
              menu
            </a>
          </li>
          <li>
            <a href="#expert" onClick={montoggle}>
              expert
            </a>
          </li>
          <li>
            <a href="#testimoniols" onClick={montoggle}>
              testimoniols
            </a>
          </li>
          <li>
            <a href="#contact" onClick={montoggle}>
              contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="txt cont">
        <h1>Welcome to PATO restaurant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          excepturi delectus? Ullam, nemo perspiciatis !
        </p>
        <a className="a" href="#home">
          our menu
        </a>
      </div>
    </header>
  );
}

export default Navbar;
