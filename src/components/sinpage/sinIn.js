import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SinIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sinInValidation, setSinInValidation] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const validationHandler = () => {
    let data = JSON.parse(localStorage.getItem('data'));
    // console.log(data.Email, 'sine logn');
    if (data.Email === email) {
      console.log('succesful log');
    } else {
      setSinInValidation(true);
      setTimeout(function () {
        setSinInValidation(false);
      }, 2000);
    }
    if (data.Password === password) {
      console.log('helo');
    } else {
      setSinInValidation(true);
      setTimeout(function () {
        setSinInValidation(false);
      }, 2000);
    }
  };

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
            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <h1>Sign In</h1>
              <div className="info">
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <p
                  class="nameAlert validation"
                  style={
                    sinInValidation ? { display: 'block' } : { display: 'none' }
                  }
                >
                  Enter a correct details
                </p>
              </div>
            </form>
            <div className="btn">
              <button
                className="btn-primary"
                type="submit"
                onClick={() => {
                  validationHandler();
                }}
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="signup">
            <p>New to Netflix ?</p>
            <Link to="/SinUpPage">Sign up now</Link>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link to="#">Learn more.</Link>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default SinIn;
