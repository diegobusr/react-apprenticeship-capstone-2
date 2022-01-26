import styled from 'styled-components';

export const ImageDiv = styled.div`
  background-color: #292929;
  background-image: url(${(prop) => prop.url});
  filter: brightness(90%);
  background-position: center center;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  filter: blur(13px);
  background-size: cover;
  overflow: hidden;
  position: fixed;
  transform: scale(1.1);
`;
