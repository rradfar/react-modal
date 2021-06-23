import { useState } from 'react';
import Modal from './Components/Modal';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const Toggle = () => setShowModal(!showModal);

  return (
    <div className='App'>
      <button onClick={() => Toggle()}>Click</button>
      {<Modal showModal={showModal} />}
    </div>
  );
}

export default App;
