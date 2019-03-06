import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const NavBar = () => {
	return (
    <div>
      <AppBar position="static">
        <center>
          {" "}
          <img
            src="https://i.imgur.com/N8ZfaDL.png"
            alt="Dogwarts"
            width="300px"
          />
        </center>
        <Toolbar>
          <Typography variant="title" color="inherit" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;