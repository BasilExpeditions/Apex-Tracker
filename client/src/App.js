import React from 'react';
import Header from './components/header';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      Changes Saved
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
