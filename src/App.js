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
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [coin, setCoin] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");
  const [result, setResult] = useState({});

  const [hourGraph, setHourGraph] = useState({});
  const [modal, setModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      if (coin === "" || cryptocurrency === "") return;
      setIsLoading(true);
      const urlData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
      const urlHourData = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${cryptocurrency}&tsym=${coin}&limit=24`;
      const resultData = await axios.get(urlData);
      const hourData = await axios.get(urlHourData);

      setResult(resultData.data.DISPLAY[cryptocurrency][coin]);
      setHourGraph(hourData.data.Data.Data);
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
    <Container
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, type: "spring", stiffness: 100 }}
    >
      <Wrapper>
        <div className="info-wrapper">
          <HeadingTitle>Cryptocurrency trader</HeadingTitle>
          <Form setCoin={setCoin} setCryptocurrency={setCryptocurrency} />
          {Component}
          <AnimatePresence exitBeforeEnter>
            {modal && (
              <Modal
                setModal={setModal}
                cryptocurrency={cryptocurrency}
                result={result}
                coin={coin}
                hourGraph={hourGraph}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="image-wrapper">
          <Image src={Crypto} alt="crypto-name" style={{ width: "100%" }} />
        </div>
      </Wrapper>
    </Container>
  );
};

export default App;
