// import React, { useReducer } from 'react';
// import axios from 'axios';
// import GithubContext from './githubContext';
// import GithubReducer from './githubReducer';
// import { SET_ALERT, REMOVE_ALERT } from '../types';
// import githubContext from './githubContext';

// const GithubState = props => {
//   const initialState = null;

//   const [state, dispatch] = useReducer(AlertReducer, initialState);

//   //Set alert
//   const showAlert = (msg, type) => {
//     setAlert({ msg, type });
//     setTimeout(() => setAlert(null), 5000);
//   };

//   return (
//     <AlertContext.Provider
//       value={{
//         alert: state,
//         sertAlert
//       }}
//     >
//       {props.children}
//     </AlertContext.Provider>
//   );
// };

// export default AlertState;
