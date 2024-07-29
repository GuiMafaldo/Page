import React from 'react';
import { ButtonNext, ButtonPreview } from './styles';

// Componente para o botão "Anterior"
const PreviousButton = (props: any) => {
  const { onClick } = props;
  return (
    <ButtonPreview onClick={onClick} className="custom-prev-button">
      <img src="./assets/left.png" alt="" />
    </ButtonPreview>
  );
};

// Componente para o botão "Próximo"
const NextButton = (props: any) => {
  const { onClick } = props;
  return (
    <ButtonNext onClick={onClick} className="custom-next-button">
      <img src="./assets/right.png" alt="" />
    </ButtonNext>
  );
};

export { PreviousButton, NextButton };