import styled, { css } from 'styled-components';

export const StyledSpan = styled.span`
  font-size: 0.8em;
  text-align: justify;
  margin: 3px 3px 3px 3px;
  color: white;
  text-shadow: 1px 1px 0px #000000;
  ${(prop) =>
    !prop.expandTextButton &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    `};
`;
