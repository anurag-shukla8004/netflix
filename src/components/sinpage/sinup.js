import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SinUp() {
  // Input Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Input Fields Alert
  const [allFieldFill, setAppFieldFill] = useState(false);
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [confirmPasswordValidation, setConfirmPasswordValidation] =
    useState(false);
  let data = [];
  if (localStorage.getItem('data')) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    data = [];

    localStorage.setItem('data', JSON.stringify(data));
  }

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const validationHandler = () => {
    let Name = false;
    let Email = false;
    let Number = false;
    let Password = false;
    let ConfirmPassword = false;

    if (
      name.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0
    ) {
      setAppFieldFill(true);
      setTimeout(function () {
        setAppFieldFill(false);
      }, 2000);
    } else {
      // name validation
      if (name.length > 2) {
        Name = true;
      } else {
        setNameValidation(true);
        setTimeout(function () {
          setNameValidation(false);
        }, 2000);
      }
      // email validation
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        Email = true;
      } else {
        setEmailValidation(true);
        setTimeout(function () {
          setEmailValidation(false);
        }, 2000);
      }
      // phone number validation
      if (phone.match(/^\d{10}$/) && phone.match(/^(9|8|7|6)\d{9}$/)) {
        Number = true;
      } else {
        setPhoneValidation(true);
        setTimeout(function () {
          setPhoneValidation(false);
        }, 2000);
      }
      // Password validation
      if (password.length > 3) {
        Password = true;
      } else {
        setPasswordValidation(true);
        setTimeout(function () {
          setPasswordValidation(false);
        }, 2000);
      }
      // Confirm Password Validation
      if (password == confirmPassword) {
        ConfirmPassword = true;
      } else {
        setConfirmPasswordValidation(true);
        setTimeout(function () {
          setConfirmPasswordValidation(false);
        }, 2000);
      }
    }

    // Store User Data in local storage
    if (
      Name == true &&
      Email == true &&
      Number == true &&
      Password == true &&
      ConfirmPassword == true
    ) {
      data = {
        Name: name,
        Email: email,
        Number: phone,
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      };
      localStorage.setItem('data', JSON.stringify(data));
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setConfirmPassword('');
    }
  };

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
            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
            >
              <h1>Sign Up</h1>
              <div className="info">
                <input
                  className="name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <p
                  class="nameAlert validation"
                  style={
                    nameValidation ? { display: 'block' } : { display: 'none' }
                  }
                >
                  Enter more than 2 character
                </p>
                <br />
                <input
                  className="email"
                  type="email"
                  placeholder="Email or phone number"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <p
                  class="emailAlert validation"
                  style={
                    emailValidation ? { display: 'block' } : { display: 'none' }
                  }
                >
                  You have entered an invalid email address!
                </p>

                <br />
                <input
                  className="phoneNumber"
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <p
                  class="numberAlert validation"
                  style={
                    phoneValidation ? { display: 'block' } : { display: 'none' }
                  }
                >
                  Enter 10 digit number start with 9,8,7 and 6
                </p>
                <br />
                <input
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <p
                  class="passwordAlert validation"
                  style={
                    passwordValidation
                      ? { display: 'block' }
                      : { display: 'none' }
                  }
                >
                  Minimum 4 character
                </p>
                <br />
                <input
                  className="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <p
                  class="comfirmPasswordAlert validation"
                  style={
                    confirmPasswordValidation
                      ? { display: 'block' }
                      : { display: 'none' }
                  }
                >
                  Passwords did not match
                </p>
                <p
                  class="comfirmPasswordAlert validation"
                  style={
                    allFieldFill ? { display: 'block' } : { display: 'none' }
                  }
                >
                  Fill All Fields
                </p>
              </div>
            </form>
            <div className="btn">
              <button
                className="btn-primary"
                onClick={() => {
                  validationHandler();
                }}
              >
                Sign Up
              </button>
            </div>
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

export default SinUp;
