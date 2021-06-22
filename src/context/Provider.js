import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
    const [carsState, newState] = useState({
        red: false,
        blue: false,
        yellow: false,
      },
    );

  const moveCar = (car, side) => {
    newState({
        ...carsState.cars,
        [car]: side,
    });
  };

  return (
    <CarsContext.Provider value={{carsState, moveCar}}>
      { children }
    </CarsContext.Provider>
  );
}

export default Provider;
