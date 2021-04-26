import React, { Fragment, useState } from "react";
import { Label, Select } from "../styles/General.styles";

const useCrypto = (label, initialState, options) => {
  const [crypto, setCrypto] = useState(initialState);
  const data = options.slice(0, 15);
  const SelectCrypto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setCrypto(e.target.value)} value={crypto}>
        <option value="Select">Select</option>
        {data.map((coin) => (
          <option value={coin.CoinInfo.Name} key={coin.CoinInfo.Id}>
            {coin.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [crypto, SelectCrypto, setCrypto];
};

export default useCrypto;
