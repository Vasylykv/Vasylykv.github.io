import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './style/style.scss';

// import RickAndMortyService from './services/RickAndMortyService';

// const rickandmortyService = new RickAndMortyService();

// rickandmortyService.getAllCharacters().then((res) => {
//   console.log(res);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
