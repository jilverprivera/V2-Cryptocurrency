import React from "react";
import { QuoteWrapper, ModalButton } from "../styles/General.styles";

const Quote = ({ result, setModal, modal }) => {
  if (Object.keys(result).length === 0) return null;
  return (
    <QuoteWrapper>
      <p className="result">
        Actual price:&nbsp;<span className="result-value">{result.PRICE}</span>
      </p>
      <p className="result">
        Highest price in last 24h:&nbsp;
        <span className="result-value">{result.HIGH24HOUR}</span>
      </p>
      <p className="result">
        Lowest price in last 24h:&nbsp;
        <span className="result-value">{result.LOW24HOUR}</span>
      </p>
      <p className="result">
        Variation percent in last 24h:&nbsp;
        <span className="result-value"> {result.CHANGEPCT24HOUR}</span>
      </p>
      <p className="result">
        Opening price in last 24h:&nbsp;
        <span className="result-value">{result.OPEN24HOUR}</span>
      </p>
      <p className="result">
        Last update:&nbsp;<span className="result-value">{result.LASTUPDATE}</span>
      </p>
      <ModalButton onClick={() => setModal(true)}> View price graphic</ModalButton>
    </QuoteWrapper>
  );
};

export default Quote;
