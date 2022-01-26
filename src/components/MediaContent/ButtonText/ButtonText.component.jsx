import React from 'react';
import { StyledButton } from './ButtonText.styles';

const ButtonText = ({ handleClick, expandTextButton }) => {
  return (
    <StyledButton onClick={handleClick}>
      {expandTextButton ? <span>contract</span> : <span>expand</span>}
    </StyledButton>
  );
};

export default ButtonText;
