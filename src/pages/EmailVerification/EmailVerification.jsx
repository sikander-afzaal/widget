import React from "react";

import Footer from "../../components/Footer/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

import "./EmailVerification.css";

const EmailVerification = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className="verification">
        <div className="verification__header">
          <FontAwesomeIcon icon={faChevronLeft} onClick={() => navigate(-1)} />
        </div>

        <div className="verification__content">
          <p className="verification__topText">
            You need to verify your email address to activate your account
          </p>

          <div className="verification__container">
            <h1 className="verification__heading">Verify your Email</h1>

            <p className="verification__para">
              An email with instructions to verify your email address has been
              sent to you. Haven't recieved a verification code in your email?
              Click the button to re-send or contact our support.
            </p>

            <input type="text" className="verification__input" />

            <div className="verification__actions">
              <button className="bgwhite-border-btn">Contact Support</button>

              <button className="bgwhite-border-btn">Resend</button>

              <Link to="/master-pin" className="aqua-btn">
                Submit
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmailVerification;
