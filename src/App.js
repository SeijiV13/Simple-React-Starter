import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import Header from './components/common/Header';
import CoursePage from './components/courses/CoursePage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Routes></Routes>
        </div>
   
      </div>
    );
  }
}

export default App;
