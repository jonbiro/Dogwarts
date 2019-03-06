import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <br />
        <center>
          {" "}
          <img
            src="https://i.imgur.com/N8ZfaDL.png"
            alt="Dogwarts"
            width="350px"
          />
          <Typography variant="title" color="inherit" />
          <h1 className="navBar">Hairy Pupper and the Chamber of Milkbones</h1>
        </center>
      </AppBar>
    </div>
  );
};
export default NavBar;
