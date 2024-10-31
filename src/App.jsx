// components
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm";
import ReviewForm from "./components/ReviewForm";
import Thanks from "./components/Thanks";
import Steps from "./components/Steps";

import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";

// hooks
import { useForm } from "./hooks/useForm";

import "./App.css";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  coment: "",
};

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      
      <div className="form-container">
        <div className="header">
          <h2>Deixe sua avaliação</h2>
          <p>
            Esperamos que você tenha gostado da sua compra, preencha o formulário abaixo para
            avaliar o nosso produto
          </p>
        </div>
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <BsArrowLeft />
                <span>Voltar</span>
              </button> 
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <BsArrowRight />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <BsFillSendFill />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
