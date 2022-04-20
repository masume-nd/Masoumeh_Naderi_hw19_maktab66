import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import AddCircleIcon from '@mui/icons-material/AddCircle';
export default function MyAppBar() {
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  my skills within
                  <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                     Material UI
                  </Typography>
               </Typography>

               <div className="">
                  <Icon  sx={{ color: red[500] }}><AddCircleIcon/></Icon>
               </div>
            </Toolbar>
         </AppBar>
      </Box>
   );
}
