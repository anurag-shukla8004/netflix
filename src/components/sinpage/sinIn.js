import React from 'react';
import { Link } from 'react-router-dom';

function sinIn() {
  return (
    <div>
      <header style={{ height: '100vh' }} className="showcase">
        <Link to="/">
          <div className="logo">
            <img src="https://i.ibb.co/r5krrdz/logo.png" />
          </div>
        </Link>

        <div className="showcase-content">
          <div className="formm">
            <form>
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                />
                <br />
                <input
                  className="email"
                  type="password"
                  placeholder="Password"
                />
                <p
                  class="nameAlert validation"
                  style={{ display: '', textAlign: 'center' }}
                >
                  Enter a correct details
                </p>
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="signup">
            <p>New to Netflix ?</p>
            <Link to="/SinUpPage">Sign up now</Link>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default sinIn;
