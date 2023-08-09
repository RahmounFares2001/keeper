import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";

const ImageMenu = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const toggleMenu = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <div>
      {/* Image */}
      <img
        className="user-img"
        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
        alt="Image"
        onClick={toggleMenu}
      />

      {/* Menu */}
      {isMenuVisible && (
        <div className="container">
          <ul>
            <li>
              <button className="user-btn">
                {" "}
                <SettingsIcon className="icon-btn" /> <p>Settings</p>{" "}
              </button>
            </li>
            <li>
              <button className="user-btn">
                {" "}
                <DarkModeIcon className="icon-btn" /> <p>Dark Mode</p>{" "}
              </button>
            </li>
            <li>
              <button className="user-btn">
                {" "}
                <LogoutIcon className="icon-btn" /> <p>Logout</p>{" "}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageMenu;
