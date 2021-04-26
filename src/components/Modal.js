import React, { useState } from "react";
import {
  CloseModal,
  LineContainer,
  ModalBackdrop,
  ModalContainer,
} from "../styles/General.styles";
import { AiOutlineClose } from "react-icons/ai";
import { Line } from "react-chartjs-2";
import { AnimatePresence } from "framer-motion";

const Modal = ({ setModal, dailyGraph, cryptocurrency }) => {
  const [arrData, setArrData] = useState([15, 22, 25]);

 
  return (
    <AnimatePresence exitBeforeEnter>
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
              height={100}
              width={200}
            />
          </LineContainer>
        </ModalContainer>
      </ModalBackdrop>
    </AnimatePresence>
  );
};

export default Modal;
