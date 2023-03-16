import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import CharactersPage from '../../pages/CharactersPage/CharactersPage';
import SingleCharPage from '../../pages/SingleCharPage/SingleCharPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/*" element={<CharactersPage />} />
            <Route path="/character/:id" element={<SingleCharPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
