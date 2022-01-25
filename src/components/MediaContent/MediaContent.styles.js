import styled, { css } from 'styled-components';

export const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  margin: 15px;
  padding: 5px 10px 5px 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    max-height: 600px;
    min-width: 300px;
    min-height: 300px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.1em;
    text-align: center;
  }

  button {
    width: 20%;
    margin: auto;
    display: block;
  }
`;

export const StyledSpan = styled.span`
  font-size: 0.7em;
  text-align: justify;
  margin: 3px 3px 3px 3px;

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
