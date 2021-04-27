import React, { useEffect, useState } from "react";
import { Button, FormContainer } from "../styles/General.styles";
import useMoney from "../hooks/useMoney";
import useCrypto from "../hooks/useCrypto";
import axios from "axios";

const Form = ({ setCoin, setCryptocurrency }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const API = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const result = await axios.get(url);
      setCryptoList(result.data.Data);
    };
    API();
  }, []);

  const Coins = [
    { code: "COP", name: "Colombian peso" },
    { code: "EUR", name: "Euro" },
    { code: "MXN", name: "Mexican peso" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "USD", name: "U.S. dollar" },
    { code: "GBP", name: "Pound sterling" },
    { code: "JPY", name: "Yen" },
  ];

  const [currency, SelectCurrency] = useMoney(
    "Select your currency",
    "",
    Coins
  );
  const [crypto, SelectCrypto] = useCrypto(
    "Select your Cryptocurrency",
    "",
    cryptoList
  );

  const QuoteCurrency = (e) => {
    e.preventDefault();

    if (currency === "" || crypto === "") {
      setError(true);
      return;
    }
    setError(false);
    setCoin(currency);
    setCryptocurrency(crypto);
  };

  return (
    <FormContainer onSubmit={QuoteCurrency}>
      {error && <p className="error">Oops... fill the fields please</p>}
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="Get quote" />
    </FormContainer>
  );
};

export default Form;
