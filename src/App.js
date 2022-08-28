import logo from './logo.svg';
import React, {useReducer} from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from './Components/layout';
import './App.css';

function App(){
  return(
    <div className='App'>
      <Layout></Layout>
    </div>
  );
}


export default App;
