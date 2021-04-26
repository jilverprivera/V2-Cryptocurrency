import React from "react";

const Quote = ({ result, setModal, modal }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <div>
      <p className="resultado">
        the price is: <span>{result.PRICE}</span>
      </p>
      <p className="resultado">
        Highest price in last 24h: <span>{result.HIGH24HOUR}</span>
      </p>
      <p className="resultado">
        Lowest price in last 24h: <span>{result.LOW24HOUR}</span>
      </p>
      <p className="resultado">
        Variation percent in last 24h: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p className="resultado">
        Opening price in last 24h: <span>{result.OPEN24HOUR}</span>
      </p>
      <p className="resultado">
        Last update: <span>{result.LASTUPDATE}</span>
      </p>
      <button onClick={() => setModal(true)}> View price graphic</button>
      {modal && <span>True</span>}
    </div>
  );
};

export default Quote;
