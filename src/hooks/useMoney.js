import React, { Fragment, useState } from "react";
import { Label, Select } from "../styles/General.styles";

const useMoney = (label, initialState, options) => {
  const [state, setState] = useState(initialState);

  const SelectCurrency = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="Select">Select</option>
        {options.map((coin) => (
          <option value={coin.code} key={coin.code}>
            {coin.name}
          </option>
        ))}
      </Select>
    </Fragment>
  );
  return [state, SelectCurrency, setState];
};

export default useMoney;
