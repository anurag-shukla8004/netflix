import React from 'react';
import { Link } from 'react-router-dom';

function sinIn() {
  return (
    <div>
      <header style={{ height: '100%' }} className="showcase">
        <Link to="/">
          <div className="logo">
            <img src="https://i.ibb.co/r5krrdz/logo.png" />
          </div>
        </Link>

        <div style={{ height: 'auto' }} className="showcase-content">
          <div className="formm">
            <form>
              <h1>Sign Up</h1>
              <div className="info">
                <input className="name" type="text" placeholder="Full Name" />
                <p class="nameAlert validation" style={{ display: '' }}>
                  Enter more than 2 character
                </p>
                <br />
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                />
                <p class="emailAlert1 validation" style={{ display: '' }}>
                  You have entered an invalid email address!
                </p>
                <p class="emailAlert validation" style={{ display: '' }}>
                  This email is already used enter a new email
                </p>
                <br />
                <input
                  className="phoneNumber"
                  type="number"
                  placeholder="Phone Number"
                />
                <p class="numberAlert validation" style={{ display: '' }}>
                  Enter 10 digit number start with 9,8,7 and 6
                </p>
                <br />
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                />
                <p class="passwordAlert validation" style={{ display: '' }}>
                  Minimum 4 character
                </p>
                <br />
                <input
                  className="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                <p
                  class="comfirmPasswordAlert validation"
                  style={{ display: '' }}
                >
                  Passwords did not match
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
            <p>Sin In to Netflix ?</p>
            <Link to="/SinInPage">Sign In now</Link>
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
