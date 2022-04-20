import React, { useState, useContext, useEffect } from "react";
import { CountrtyContext } from "./ContextCountry";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Cards from "./Cards";
import Searchbox from "./SearchBox";
const Filterbyregion = ({ darkMode }) => {
   const { countries, loading } = useContext(CountrtyContext);
   const [inputBlur, setInputBlur] = useState(false);
   const [selectedRegion, setSelectedRegion] = useState("Select a Region...");
   const [regionCountries, setRegionCountries] = useState([]);

   useEffect(() => {
      if (selectedRegion !== "Select a Region...") {
         const myRegion = Object.values(countries)?.filter(
            (country) => country.region === selectedRegion
         );
         setRegionCountries(myRegion);
      } else {
         setRegionCountries([]);
      }
   });

   return (
      <>
         <div
            className={`seach-container ${darkMode && "seach-container-dark"}`}
         >
            <Searchbox darkMode={darkMode} />
            <div className={`filter-by-region ${darkMode && "dark"}`}>
               <div
                  type="text"
                  value={selectedRegion}
                  onClick={() => setInputBlur(!inputBlur)}
               >
                  {selectedRegion}
                  <span>
                     <ArrowDropDownIcon />
                  </span>
               </div>
               {inputBlur && (
                  <ul
                     style={darkMode ? darkModeTheme : lightMode}
                     className="region-ul"
                     value="select a region..."
                  >
                     <li
                        onClick={() => setSelectedRegion("Africa")}
                        value="Africa"
                     >
                        Africa
                     </li>
                     <li
                        onClick={() => setSelectedRegion("Americas")}
                        value="Americas"
                     >
                        Americas
                     </li>
                     <li onClick={() => setSelectedRegion("Asia")} value="Asia">
                        Asia
                     </li>
                     <li
                        onClick={() => setSelectedRegion("Europe")}
                        value="Europe"
                     >
                        Europe
                     </li>
                     <li
                        onClick={() => setSelectedRegion("Oceania")}
                        value="Oceania"
                     >
                        Oceania
                     </li>
                  </ul>
               )}
            </div>
         </div>
         {selectedRegion == "Select a Region..." && regionCountries ? (
            <Cards darkMode={darkMode} countries={countries} />
         ) : (
            <Cards darkMode={darkMode} countries={regionCountries} />
         )}
      </>
   );
};
const darkModeTheme = {
	backgroundColor: "hsl(209, 23%, 22%)",
	color: "hsl(0, 0%, 100%)",
};

const lightMode = {
	color: "hsl(200, 15%, 8%)",
   backgroundColor:" hsl(0, 0%, 98%)"
};
export default Filterbyregion;
