import React from 'react';
import './App.css';

import Testimonial from './components/testimonial/Testimonial';
import SubscribeForm from './components/subscribe/SubscribeForm';
import Footer from './components/footer/Footer';
import GlobalStyles from './styles/GlobalStyles';
import FirstLayerSection from './components/firstLayer/FirstLayer';
import SecondLayerSection from './components/secondLayer/SecondLayer';
import Seperator from './components/seperator/Seperator';
import AboutAndContact from './components/aboutAndContact/AboutAndContact';
import SocialMedia from './components/socialMedia/SocialMedia';

const App = () => {

  return (
    <div className="app">
      <GlobalStyles />
      <FirstLayerSection />
      <br />
      <SecondLayerSection />
      <Seperator />
      <Testimonial />
      <SubscribeForm />
      <AboutAndContact />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default App;

