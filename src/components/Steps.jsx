import {AiOutlineUser, AiOutlineStar} from "react-icons/ai";
import { FiSend } from "react-icons/fi";

import { BsSend } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

import "./Steps.css";

const Steps = ({ currentStep }) => {
  return (
    <div className="steps">
      <div className="step active">
        <BsPerson />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <BsStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <BsSend />
        <p>Envio</p>
      </div>
    </div>
  );
};

export default Steps;
