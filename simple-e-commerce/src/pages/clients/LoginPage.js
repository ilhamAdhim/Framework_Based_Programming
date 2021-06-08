import React, { useEffect, useState } from 'react';
import "../../styles/login.css";
import {
  Redirect,
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { login, loginWithGoogle } from '../../actions/authAction'

// ? Icons 
import { ReactComponent as IconPassword } from '../../assets/icons/password.svg'
import { ReactComponent as IconEyeOpen } from '../../assets/icons/eye.svg'
import { ReactComponent as IconEyeClose } from '../../assets/icons/eyeClose.svg'
import { ReactComponent as IconEmail } from '../../assets/icons/email.svg'
import { MDBBtn } from 'mdbreact';

const LoginPage = () => {

  const loginDispatch = useDispatch()
  const userState = useSelector(state => state.user)

  // ? Get input value for password and email input fields
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const [isLoginForAdmin, setIsLoginForAdmin] = useState(false)

  // ? Role can be user or admin
  const [role, setRole] = useState("user")

  // ? loginUser variable is used on onclick button, by updating state in store with dispatch. from authActions 
  const loginUser = () => {
    if (email.length > 0 && password.length > 0) {
      loginDispatch(login(email, password, "admin"))
    }
  }

  const loginUserWithGoogle = () => loginDispatch(loginWithGoogle(role))

  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleEmailChange = (e) => setEmail(e.target.value)

  useEffect(() => {
    console.log(userState)
  }, [userState]);

  const { loginError, isAuthenticated } = userState

  if (isAuthenticated && userState.user.role === "user") {
    return <Redirect to="/profile" />;
  } else if (isAuthenticated && userState.user.role === "admin") {
    return <Redirect to="/ManageProducts" />;
  }

  else {
    return (

      <section style={{ height: '100vh', boxSizing: 'border-box', backgroundColor: "#F5F5F5" }}>
        <div className="d-flex flex-column align-items-center h-100 flex-lg-row" style={{ fontFamily: 'Poppins' }} >
          <div className="position-relative d-none d-lg-block h-100 width-left-content-3-5" data-aos="fade-right">
            <img className="position-absolute img-fluid centered-content-3-5"
              src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
              alt="" />
          </div>
          <div className="d-flex mx-auto align-items-left justify-content-left width-right-content-3-5" data-aos="fade-up" data-aos-delay="500">
            <div className="right-content-3-5">
              <div className="align-items-center justify-content-center d-lg-none d-flex">
                <img className="img-fluid"
                  src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-5.png"
                  alt="" />
              </div>
              <h3 className="title-text-content-3-5">Log In to continue</h3>
              <p className="caption-text-content-3-5">Please log in using that account has<br />
                registered on the website.</p>

              <MDBBtn color="primary"
                className="mt-2 mb-4"
                onClick={() => setIsLoginForAdmin(!isLoginForAdmin)}>
                Login for {isLoginForAdmin ? 'user' : 'admin'}
              </MDBBtn>

              <p> You are logging in as <b style={{ textDecoration: 'underline' }}>
                {!isLoginForAdmin ? 'user' : 'admin'}</b>
              </p>
              {isLoginForAdmin ?
                <>
                  <div style={{ marginBottom: "1.75rem" }}>
                    <label htmlFor="" className="d-block input-label-content-3-5">Email Address</label>
                    <div className="d-flex w-100 div-input-content-3-5">
                      <IconEmail />
                      <input className="input-field-content-3-5" type="email" name="" id="emailAddress" placeholder="Your Email Address"
                        autoComplete="on" required onChange={handleEmailChange} />
                    </div>
                  </div>
                  <div style={{ marginTop: '1rem' }}>
                    <label htmlFor="" className="d-block input-label-content-3-5">Password</label>
                    <div className="d-flex w-100 div-input-content-3-5">
                      <IconPassword />
                      <input className="input-field-content-3-5"
                        type={displayPassword ? "text" : "password"}
                        id="password" placeholder="Your Password"
                        minLength="6" required onChange={handlePasswordChange} />
                      {/* Toggle display password */}
                      <div onClick={() => setDisplayPassword(!displayPassword)}>
                        {displayPassword ? <IconEyeClose /> : <IconEyeOpen />}
                      </div>
                    </div>
                  </div>
                  {loginError && (
                    <p >
                      Incorrect email or password.
                    </p>
                  )}
                  <div className="text-right" style={{ marginTop: '0.75rem' }}>
                    <div className="forgot-password-content-3-5 font-italic">Forgot Password?</div>
                  </div>
                  <div style={{ color: 'white' }} >
                    <button className="btn btn-fill-content-3-5 d-block w-100" onClick={loginUser}>Log In To My Account</button>
                  </div>
                </>
                :
                <div style={{ color: 'white', paddingBottom: '2em' }} >
                  <button className="btn btn-fill-google-content-3-5 d-block w-100" style={{ color: "black" }} onClick={loginUserWithGoogle}>
                    <img src="https://cdn.worldvectorlogo.com/logos/google-icon.svg" height={20} style={{ paddingRight: '2em' }} />
                   Log In With Google
                  </button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default LoginPage;