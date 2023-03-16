import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CharactersPage from '../../pages/CharactersPage/CharactersPage';
import SingleCharPage from '../../pages/SingleCharPage/SingleCharPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/*" element={<CharactersPage />} />
          <Route path="/character/:id" element={<SingleCharPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
