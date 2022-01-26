import React from 'react';
import { StyledSpan } from './Explanation.styles';

const Explanation = ({ expandTextButton, explanation }) => {
  return (
    <StyledSpan expandTextButton={expandTextButton}> {explanation} </StyledSpan>
  );
};

export default Explanation;
