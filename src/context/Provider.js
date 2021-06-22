// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';
function Provider ({ children }) {
  const [context, newContext] = useState({
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    });

  const moveCar = (car, side) => {
    newContext({
      cars: {
        ...context.cars,
        [car]: side,
      },
      signal: {
        ...context.signal,
      }
    });
  };

  const changeSignal = (signalColor) => {
    newContext({
      cars: {
        ...context.cars,
      },
      signal: {
        color: signalColor,
      },
    });
  };

  return (
    <CarsContext.Provider value={{context, moveCar, changeSignal}}>
      {children}
    </CarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
