import React from "react";
import ImageMenu from "./ImageMenu";

import EventNoteIcon from "@mui/icons-material/EventNote";

function Header() {
  return (
    <header>
      <h1>
        <EventNoteIcon> </EventNoteIcon>
        <em> </em>
        Keeper
        <ImageMenu />
      </h1>
    </header>
  );
}

export default Header;
