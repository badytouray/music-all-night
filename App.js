import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import Events from "./Components/Events/EventListItems";
import Products from "./Components/Pages/Products";
// import SignUp from "./Components/Pages/SignUp";

import FAQ from "./Components/Faq/index";
import Form from "./Components/Form/Form";
import ContactUs from "./Components/ContactUs/index";
import ScrollToTop from "./Components/ScrollToTop";
import TermsOfService from "./Components/TermsofService/TermsOfService";
import Location from "./Components/Location/Location";

import AfroBeats from "./Components/Afro-Beats/AfroBeats";



import News from "./Components/News/News";
import Testimonials from "./Components/Testimonials/Testimonials";

import HangOverRemedies from "./Components/News/HanoverRemedies/HangOverRemedies";
import HalloweenItems from "./Components/News/HalloweenEvent/HalloweenItems";
import NickyInterview from "./Components/ExclusiveInterviews/NickyInterview/NickyInterview";
import WhatsOn from "./Components/WhatsOn/WhatsOn";
import ExclusiveInterviews from "./Components/ExclusiveInterviews/ExclusiveInterviews";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/events" component={Events} />

          <Route path="/afro-beats" component={AfroBeats} />
     
          <Route path="/products" component={Products} />
 
          <Route path="/faq" component={FAQ} />
          <Route path="/sign-up" component={Form} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/location" component={Location} />
          <Route path="/news" component={News} />
          <Route path="/halloween-event" component={HalloweenItems} />
          <Route path="/hangover-remedies" component={HangOverRemedies} />
          <Route path="/whats-on" component={WhatsOn} />
          <Route path="/music-all-night-nicky-blackmarket-interview" component={NickyInterview} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/interviews" component={ExclusiveInterviews} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
