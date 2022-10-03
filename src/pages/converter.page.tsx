import React from 'react';
import '../styles/Converter.scss';
import CurrencyConverter from '../components/CurrencyConverter/CurrencyConverter';

function Converter() {

  return (
    <div className="Converter">
      <div className="block">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default Converter;
