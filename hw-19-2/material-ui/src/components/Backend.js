import { Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import ListItemButton from "@mui/material/ListItemButton";

const Backend = () => {
   return (
      <>
         <Grid
            container
            style={{ height: "75vh" }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
         >
            <Grid item xs={6} sx={{ border: 1 }}>
               <Typography variant="h4">Back-End</Typography>
               <List>
                  <ListItemButton>
                     <ListItem>
                        <ListItemText>Node.js</ListItemText>
                        <ListItemIcon>
                           <DeleteIcon />
                        </ListItemIcon>
                        <ListItemIcon>
                           <EditIcon />
                        </ListItemIcon>
                     </ListItem>
                  </ListItemButton>
               </List>
               <List>
                  <ListItemButton>
                     <ListItem>
                        <ListItemText>MongoDB</ListItemText>
                        <ListItemIcon>
                           <DeleteIcon />
                        </ListItemIcon>
                        <ListItemIcon>
                           <EditIcon />
                        </ListItemIcon>
                     </ListItem>
                  </ListItemButton>
               </List>
            </Grid>

            <Grid item xs={6} sx={{ border: 1 }}>
               <Typography variant="body2">
                  Node.js is an open-source, cross-platform JavaScript run-time
                  environment that executes JavaScript code outside of a
                  browser.
               </Typography>
               <Typography variant="body2">
                  MongoDB is a cross-platform document-oriented database
                  program. Classified as a NoSQL database program.
               </Typography>
            </Grid>
         </Grid>
      </>
   );
};

export default Backend;
