import React from 'react';

import './modal.scss';
export default function Modal({ close, showModal, title, children }) {
  return (
    <>
      {showModal ? (
        <div className='modalContainer' onClick={() => close()}>
          <div className='modal' onClick={e => e.stopPropagation()}>
            <header className='modal_header'>
              <h2 className='modal_header-title'>{title}</h2>
              <button className='close' onClick={() => close()}>
                Close
              </button>
            </header>
            <main className='modal_content'>{children}</main>
            <footer className='modal_footer'>
              <button className='cancel' onClick={() => close()}>
                Cancel
              </button>
              <button className='submit'>Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
