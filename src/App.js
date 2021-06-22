import { useState } from 'react';
import './App.scss';

function App() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div className='App'>
      <button onClick={() => Toggle()}>Click</button>
      {modal && <div className='modal'>This is a modal</div>}
    </div>
  );
}

export default App;
