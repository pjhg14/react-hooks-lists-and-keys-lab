import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  //Generate list of links: <a href="#home">home</a> 
  const linkList = links.map(link => <a key={link} href={`#${link}`}>{link}</a>)

  return <nav>{linkList}</nav>;
}

export default NavBar;
