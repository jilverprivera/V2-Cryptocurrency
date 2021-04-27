import React, { useState } from "react";
import {
  CloseModal,
  InfoModalWrapper,
  LineContainer,
  ModalBackdrop,
  ModalContainer,
} from "../styles/General.styles";
import { AiOutlineClose } from "react-icons/ai";
import { Line } from "react-chartjs-2";

const Modal = ({ setModal, cryptocurrency, result }) => {
  const [arrData] = useState([15, 22, 25]);

  return (
    <ModalBackdrop
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ModalContainer>
        <CloseModal onClick={() => setModal(false)}>
          <AiOutlineClose />
        </CloseModal>

        <LineContainer>
          <Line
            data={{
              labels: arrData,
              datasets: [
                {
                  label: `${cryptocurrency}`,
                  data: arrData,
                  fill: false,
                  borderColor: "rgba(0,0,0,0.4)",
                  tension: 0.1,
                },
              ],
            }}
            height={500}
            width={1000}
          />
        </LineContainer>
        <InfoModalWrapper>
          <div className="info">
            Actual price: <span className="info-value">{result.PRICE}</span>
          </div>
          <div className="info">
            Lowest price in last 24h:
            <span className="info-value">{result.LOW24HOUR}</span>
          </div>
          <div className="info">
            Highest price in last 24h:
            <span className="info-value">{result.HIGH24HOUR}</span>
          </div>
          <div className="info">
            Opening price 24h ago:
            <span className="info-value">{result.OPEN24HOUR}</span>
          </div>
          <div className="info">
            Percentage variation in last 24h:
            <span className="info-value">{result.CHANGEPCT24HOUR}%</span>
          </div>
          <div className="info">
            Last update: <span className="info-value">{result.LASTUPDATE}</span>
          </div>
          <div className="info">
            Percentage variation in last hour:
            <span className="info-value">{result.CHANGEPCTHOUR}%</span>
          </div>
          <div className="info">
            Lowest price in last hour:
            <span className="info-value">{result.LOWHOUR}</span>
          </div>
          <div className="info">
            Highest price in last hour:
            <span className="info-value">{result.HIGHHOUR}</span>
          </div>
        </InfoModalWrapper>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
