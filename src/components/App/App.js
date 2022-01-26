import { useState } from 'react';
import HomePage from '../../pages/Home';
import { ImageDiv } from './App.styles';
import { GlobalStyle } from '../../global.styles';

const App = () => {
  const [urlBackground, setUrlBackground] = useState('');

  return (
    <>
      <GlobalStyle />
      <ImageDiv url={urlBackground} />
      <HomePage setUrlBackground={setUrlBackground} />
    </>
  );
};

export default App;
