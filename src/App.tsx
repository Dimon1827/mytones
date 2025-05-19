import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/screens/home/Home';
import Explorer from './components/screens/explorer/Explorer';
import MyMusic from './components/screens/my-music/MyMusic';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/explorer' element={<Explorer />} />
          <Route path='/my-music' element={<MyMusic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
