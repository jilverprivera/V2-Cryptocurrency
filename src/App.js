import { useState, useEffect } from "react";
import axios from "axios";

import Form from "./components/Form";
import Quote from "./components/Quote";
import Crypto from "./images/crypto.svg";
import {
  Container,
  HeadingTitle,
  Image,
  Wrapper,
} from "./styles/General.styles";
import Loader from "./components/Loader";
import Modal from "./components/Modal";

const App = () => {
  const [coin, setCoin] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");
  const [result, setResult] = useState({});

  const [dailyGraph, setDailyGraph] = useState({});
  const [modal, setModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      if (coin === "" || cryptocurrency === "") return;
      setIsLoading(true);
      const urlData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
      const urlDailyData = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${cryptocurrency}&tsym=${coin}&limit=50`;
      // const urlHourData = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${cryptocurrency}&tsym=${coin}&limit=20`;
      const resultData = await axios.get(urlData);
      const dailyGraphData = await axios.get(urlDailyData);

      setResult(resultData.data.DISPLAY[cryptocurrency][coin]);
      setDailyGraph(dailyGraphData.data.Data.Data);
      setIsLoading(false);
    };
    getQuote();
  }, [coin, cryptocurrency]);

  const Component = isLoading ? (
    <Loader />
  ) : (
    <Quote result={result} setModal={setModal} modal={modal} />
  );

  return (
    <Container>
      <Wrapper>
        <div>
          <HeadingTitle>Cryptocurrency trader</HeadingTitle>
          <Form setCoin={setCoin} setCryptocurrency={setCryptocurrency} />
          {Component}
          {modal && (
            <Modal
              setModal={setModal}
              dailyGraph={dailyGraph}
              cryptocurrency={cryptocurrency}
            />
          )}
        </div>
        <div>
          <Image src={Crypto} alt="crypto-name" style={{ width: "100%" }} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default App;
