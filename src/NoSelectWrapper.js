// NoSelectWrapper.js
import React, { useEffect } from 'react';
import './NoSelectWrapper.css';

function NoSelectWrapper({ children }) {
//   useEffect(() => {
//     const preventDefault = (e) => {
//       e.preventDefault();
//     };

//     const preventF12 = (e) => {
//       if (e.keyCode === 123) {
//         e.preventDefault();
//       }
//     };

//     // Add event listeners to intercept context menu, cut, copy, and paste events
//     document.addEventListener('contextmenu', preventDefault);
//     document.addEventListener('cut', preventDefault);
//     document.addEventListener('copy', preventDefault);
//     document.addEventListener('paste', preventDefault);

//     // Add event listener to intercept F12 keydown event
//     document.addEventListener('keydown', preventF12);

//     // Remove event listeners on component unmount
//     return () => {
//       document.removeEventListener('contextmenu', preventDefault);
//       document.removeEventListener('cut', preventDefault);
//       document.removeEventListener('copy', preventDefault);
//       document.removeEventListener('paste', preventDefault);
//       document.removeEventListener('keydown', preventF12);
//     };
//   }, []);

  return <div className="no-select">{children}</div>;
}

export default NoSelectWrapper;
