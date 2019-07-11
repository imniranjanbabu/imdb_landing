import React from 'react';
import './App.css';
import Color from './Color';
import { red } from 'ansi-colors';


const Slide = () => (
  <div className="slide">
    <p></p>

  </div>
)

const App = () => (
  <div className="app">
    <h1>IMDb</h1>
    <h3>MOVIES</h3>
    <h3>TV SERIES</h3>
    <h3>NEWS</h3>
    <h3>PHOTOS</h3>
    <h3>EVENTS</h3>
    <h3>TRAILERS</h3>
    <Slide />
    <Color title="RED" />
    <Color title="BLUE" />
    <Color title="GREEN" />
    <Color title="VIOLET" />


  </div>
);




export default App;
