import React from 'react'

import './modal.scss' 
export default function Modal({showModal}) {
  return (
   <>
   {
     showModal ? 
     <div className="modalContainer">
       <div className="modal">
         <header className="modal_header">
           <h2 className="modal_header-title">Modal</h2>
           <button className="close">Close</button>
         </header>
         <main className="modal_content">
           Some content
         </main>
         <footer className="modal_footer">
           <button className="cancel">Cancel</button>
           <button className="submit">Submit</button>
         </footer>
       </div>
     </div>
     : null
   }
   </>
  )
}
