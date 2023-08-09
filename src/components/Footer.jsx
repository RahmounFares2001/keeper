import React from "react";

function Footer() {
  var currentDate = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentDate}</p>
      <p>Made by Rahmoun Fares</p>
    </footer>
  );
}

export default Footer;
