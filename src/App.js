import React from 'react';
import MsgBox from './class-props';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <MsgBox
        text="React & React Native"
        color="blue"
        bgColor="#ccc"
        fontSize="18pt"
        border="solid 1px black"
    />
  );
}

export default App;
