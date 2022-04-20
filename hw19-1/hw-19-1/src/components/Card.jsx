import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ darkMode ,...props}) => {

  return (
    <div className={`card ${darkMode ? "dark" : ""}`} key={props.numericCode}>
      <Link to={`${props.alpha2Code}`} style={darkMode ? darkModeTheme : lightMode} >
      <div className='card-image'>
        <img src={props.flag}/>
      </div>
      <div className='card-text'>
        <h3>{props.name}</h3>
        <p><strong>Population: </strong>{props.population}</p>
        <p><strong>Region: </strong>{props.region}</p>
        <p><strong>Capital: </strong>{props.capital}</p>
      </div>  
    </Link>
    </div>
  );
}
const darkModeTheme = {
	color: "hsl(0, 0%, 100%)",
  textDecoration: "none"
};

const lightMode = {
	color: "hsl(200, 15%, 8%)",
  textDecoration: "none"
};

export default Card;
