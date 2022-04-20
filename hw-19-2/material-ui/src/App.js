import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Backend from "./components/Backend";
import Webdesign from "./components/WebDesign";
import Frontend from "./components/FrontEnd";
import MyAppBar from "./components/MyAppBar";
import Allitems from "./components/AllItems";

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   );
}
TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
   };
}

export default function BasicTabs() {
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <>
         <MyAppBar />
         <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
            <TabPanel value={value} index={0}>
               <Backend />
            </TabPanel>
            <TabPanel value={value} index={1}>
               <Frontend />
            </TabPanel>
            <TabPanel value={value} index={2}>
               <Webdesign />
            </TabPanel>
            <TabPanel value={value} index={3}>
               <Allitems />
            </TabPanel>
            <Tabs
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <Tab label="Backend" {...a11yProps(0)} />
               <Tab label="Frontend" {...a11yProps(1)} />
               <Tab label="Webdesign" {...a11yProps(2)} />
               <Tab label="Allitems" {...a11yProps(3)} />
            </Tabs>
         </Box>
      </>
   );
}
