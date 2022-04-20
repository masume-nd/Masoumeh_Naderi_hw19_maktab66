import React from 'react';
import Card from './Card';

const Cards = ({ countries , darkMode}) => {
  return (
    <div className={`cards-container ${darkMode && "darkBackground"}`}>
     {Object.values(countries).map(country => 
          <Card 
          darkMode={darkMode}
          name={country.demonym}
          flag={country.flags.png} 
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital}
          alpha2Code={country.alpha2Code}
          key={countries.numericCode}
          />
     )} 
    </div>
  );
}

export default Cards;
