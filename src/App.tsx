// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AirdropComponent from './components/AirdropComponent';
import FriendsComponent from './components/FriendsComponent';
import ExchangeComponent from './components/ExchangeComponent';
import EarnComponent from './components/EarnComponent';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ExchangeComponent />} />
          <Route path="/earn" element={<EarnComponent />} />
          <Route path="/airdrop" element={<AirdropComponent />} />
          <Route path="/friends" element={<FriendsComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
