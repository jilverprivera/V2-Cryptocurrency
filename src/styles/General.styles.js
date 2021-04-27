import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  width: 90%;
  max-width: 1500px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  @media (max-width: 768px) {
    display: block;
  }

  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    display: none;
    width: 60%;
    margin: 0 auto;
  }
`;
export const HeadingTitle = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 2rem;
  color: #f0f2f5;
  &::after {
    content: "";
    width: 60%;
    margin: 10px auto;
    height: 5px;
    display: block;
    background-color: #617d98;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

//Form
export const FormContainer = styled.form`
  margin-top: 2rem;
  width: 100%;
  margin: 0 auto;
  //   border: 2px solid #000;
`;

export const Button = styled.input`
  margin-top: 1.2rem;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 16px;
  background-color: #617d98;
  width: 100%;
  border-radius: 5px;
  color: #172026;
  border: none;
  outline: none;
  text-transform: uppercase;
  transition: background-color 0.4s ease;
  margin-bottom: 20px;
  &:hover {
    background-color: #1a2039;
    color: #f0f2f5;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  letter-spacing: 1px;
  color: #f0f2f5;
  display: block;
  margin: 10px 0px 5px;
`;
export const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  outline: none;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: 1px;
`;

//Quote
export const QuoteWrapper = styled(motion.div)`
  width: 100%;
  .result {
    color: #f0f2f5;
    // border: 2px solid #000;
    font-size: 18px;
    text-align: center;
    margin: 5px 0px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  .result-value {
    font-size: 20px;
    margin-left: 5px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

// Modal
export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0;
  bottom: 0;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px 30px 30px 30px;
  backdrop-filter: blur(10px);
`;
export const ModalContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  border-radius: 10px;
  position: relative;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 5px;
    height: 0px;
  }
`;
export const CloseModal = styled.div`
  position: absolute;
  top: 0px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  font-size: 30px;
  // padding:50px;
  &:hover {
    cursor: pointer;
  }
`;
export const LineContainer = styled.div`
  width: 80%;
  max-width: 900px;
  border
  margin: 0 auto;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: 2px solid #000;
  `;

export const InfoModalWrapper = styled.div`
  // border: 2px solid #000;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 0.5rem;

  .info {
    // border: 2px solid #000;
    font-size: 16px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 14px;
      margin: 5px 0px;
    }
  }
  .info-value {
    font-size: 18px;
    margin-left: 5px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ModalButton = styled.button`
  margin-top: 1.2rem;
  font-weight: bold;
  font-size: 20px;
  padding: 10px 16px;
  background-color: #617d98;
  width: 100%;
  border-radius: 5px;
  color: #172026;
  border: none;
  outline: none;
  text-transform: uppercase;
  transition: background-color 0.4s ease;
  margin-bottom: 20px;
  &:hover {
    background-color: #1a2039;
    color: #f0f2f5;
    cursor: pointer;
  }
`;
