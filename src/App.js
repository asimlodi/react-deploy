import React from 'react';
import profileImage from './imgs/project-2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>My React App</h1>
     <h2>Author :Ashim Ali Khan</h2>
     <img src={profileImage} alt="profile-image" height="50%" width="40%"/>
    </div>
  );
}

export default App;
