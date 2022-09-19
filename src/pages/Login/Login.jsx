import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="register__wrapper">
      <div className="register">
        <div className="register__top">
          <div className="register__header">
            <div className="register__headerCenter">
              <span>Login</span>
            </div>
          </div>

          <div className="register__signOptions">
            <button className="register__signOption register__facebook">
              <img src="assets/facebook.png" alt="facebook" /> Continue with
              Facebook
            </button>

            <button className="register__signOption register__twitter">
              <img src="assets/twitter.png" alt="twitter" /> Continue with
              Twitter
            </button>

            <button className="register__signOption register__google">
              <img src="assets/google.png" alt="google" />
              Continue with Google
            </button>

            <span className="register__topText">
              Or connect MetaMask or TrustWallet:
            </span>

            <button className="register__signOption register__metamask">
              <img src="assets/metamask.png" alt="metamask" />
              Connect MetaMask
            </button>

            <button className="register__signOption register__trustwallet">
              <img src="assets/trustwallet.svg" alt="trustwallet" />
              TrustWallet
            </button>
          </div>
        </div>

        <div className="register__main">
          <span className="register__mainText">Or login with email</span>

          <form className="register__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="register__input"
              placeholder="Email Address"
            />

            <input
              type="password"
              className="register__input"
              placeholder="Password"
            />

            <Link to="/terms-conditions" className="aqua-btn">
              Login
            </Link>
          </form>

          <span className="register__switchToLogin">
            Don't have an account? <Link to={"/"}>Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
