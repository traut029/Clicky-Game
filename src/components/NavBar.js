import React from "react";

const NavBar =props=> (  
<nav className="navbar fixed-top navbar-light bg-light">
  <span className="navbar-brand mb-0 h1">Clicky Game</span>
  <span>{props.message}</span>
  <span>Score: {props.score} | Top Score: {props.bestScore}</span>
</nav>
)
export default NavBar