import { useState } from 'react';
import { GlobalStyle } from '../../global.styles';
import HomePage from '../../pages/Home';

const App = () => {
  const [data, setData] = useState(null);

  return (
    <>
      {' '}
      <GlobalStyle url={data?.url} />
      <HomePage data={data} setData={setData} />
    </>
  );
};

export default App;
