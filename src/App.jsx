import React from "react";

import Register from "./pages/Register/Register";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import EmailVerification from "./pages/EmailVerification/EmailVerification";
import MasterPin from "./pages/MasterPin/MasterPin";
import Home from "./pages/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />

        <Route path="/verify" element={<EmailVerification />} />

        <Route path="/master-pin" element={<MasterPin />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
