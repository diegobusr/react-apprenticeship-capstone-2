import styled, { css } from 'styled-components';

export const StyledSpan = styled.span`
  font-size: 0.8em;
  text-align: justify;
  margin: 3px 3px 3px 3px;
  color: black;
  text-shadow: 1px 1px 30px white;
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
