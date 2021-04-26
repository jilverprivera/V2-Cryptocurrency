import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
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
  font-size: 50px;
  margin-bottom: 2rem;
  color: #f0f2f5;
  &::after {
    content: "";
    width: 50%;
    margin: 0 auto;
    height: 5px;
    display: block;
    background-color: #617d98;
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
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #dae2ec;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 25px;
  letter-spacing: 1px;
  color: #f0f2f5;
  display: block;
`;
export const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  outline: none;
  border-radius: 10px;
  font-size: 20px;
  letter-spacing: 1px;
`;

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
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
