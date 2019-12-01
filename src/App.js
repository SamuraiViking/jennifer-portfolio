import React from 'react';
import MyNavBar from './Components/MyNavbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import FixedBackground from './Components/FixedBackground'
import Videos from './Components/Videos'
import Images from './Components/Images'
import Contact from './Components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <LandingPage />
      <About />
      <FixedBackground text="MEDIA"/>
      <Videos />
      <Images />
      <FixedBackground text="CONTACT"/>
      <Contact />
    </div>
  );
}

export default App;
