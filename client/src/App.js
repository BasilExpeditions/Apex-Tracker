import React from 'react';
import Header from './components/header';
import Search from './components/search';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Search />
      Changes Saved
    </div>
  );
};
export default App;
