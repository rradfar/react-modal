import { useState } from 'react';

import Modal from './Components/Modal';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const Toggle = () => setShowModal(!showModal);

  return (
    <div className='App'>
      <button className='click' onClick={() => Toggle()}>
        Click
      </button>
      <Modal showModal={showModal} close={Toggle} title='Modal title'>
        Modal content goes here
      </Modal>
    </div>
  );
}

export default App;
