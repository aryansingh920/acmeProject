import React, { useState, useEffect } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
// import _ from "lodash"
import * as EmailValidator from "email-validator";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [msg, setMsg] = useState("");

  const [otpMsg, setOtpMsg] = useState("");

  const [loader, setLoader] = useState(false);

  const [otpViewer, setOtpViewer] = useState(false);

  const [mailotp, setMailotp] = useState("");

  const [otpInput, setOtpInput] = useState("");

  const [otpInputMsg, setOtpInputMsg] = useState("");



  useEffect(() => {
    setMsg("");
    setOtpMsg("");
  }, [email]);



  // useEffect(() =>{
  //   setOtpInputMsg("")
  // },[mailotp])

  const functionCall = async () => {
    if (EmailValidator.validate(email)) {
      setLoader(true);
      const url = `sendotp?email=${email}`;
      const result = await axios
        .get(url)
        .then((res) => {
          setOtpMsg("OTP sent to Mail");
          setLoader(false);
          setOtpViewer(true);
          return res;
        })
        .catch((err) => {
          setOtpMsg("Server Error , Please try again");
          setLoader(false);
          return err;
        });
      // console.log(result);
      setMailotp(result.data[0]);
    } else {
      setLoader(false);
      setMsg("Invalid Email");
    }
  };

  const otpViewerComponent = (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Enter The OTP"
        onChange={(e) => {
          setOtpInput(e.target.value);
        }}
      />
      <button
        class="btn btn-outline-primary"
        type="button"
        id="button-addon2"
        onClick={() => {
          if (mailotp === otpInput) {
            setOtpInputMsg("OTP is verified");
            // console.log(true)
          } else {
            setOtpInputMsg("Invalid OTP");
            // console.log(false)
          }
        }}
      >
        Verify OTP
      </button>
    </div>
  );



  const buttonComponent = (
    <div>
      {otpInputMsg === "OTP is verified" ? (
        <Button
          endIcon={<ArrowRightIcon style={{color:"white"}}/>}
          onClick={() => {
            const query = new URLSearchParams(window.location.search);
            const redirect = query.get('redirect')
            // console.log(redirect)//123
            // window.location.href = "https://acme-project-60103.web.app/"
            window.open(redirect, '_blank');
          }}
          style={{ width: "90%" }}
          variant="contained"
        >
          Continue
        </Button>
      ) : (
        <Button
          endIcon={loader && <CircularProgress style={{color:"white"}} className="p-1 m-0" />}
          onClick={() => {
            functionCall();
          }}
          style={{ width: "90%" }}
          variant="contained"
        >
          Send OTP
        </Button>
      )}

    </div>
  );







  return (
    <div>
      <div className="login-root">
        <div
          className="box-root flex-flex flex-direction--column "
          style={{ minHeight: "100vh", flexGrow: "1" }}
        >
          <div className="loginbackground box-background--white padding-top--64">
            <div className="loginbackground-gridContainer">
              <div
                className="box-root flex-flex"
                style={{ gridArea: "top / start / 8 / end" }}
              >
                <div
                  className="box-root"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 0%, rgb(247, 250, 252) 33%)",
                    flexGrow: "1",
                  }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 2 / auto / 5" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationLeftRight tans3s"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "6 / start / auto / 2" }}
              >
                <div
                  className="box-root box-background--blue800"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "7 / start / auto / 4" }}
              >
                <div
                  className="box-root box-background--blue animationLeftRight"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "8 / 4 / auto / 6" }}
              >
                <div
                  className="box-root box-background--gray100 animationLeftRight tans3s"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "2 / 15 / auto / end" }}
              >
                <div
                  className="box-root box-background--cyan200 animationRightLeft tans4s"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "3 / 14 / auto / end" }}
              >
                <div
                  className="box-root box-background--blue animationRightLeft"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "4 / 17 / auto / 20" }}
              >
                <div
                  className="box-root box-background--gray100 animationRightLeft tans4s"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
              <div
                className="box-root flex-flex"
                style={{ gridArea: "5 / 14 / auto / 17" }}
              >
                <div
                  className="box-root box-divider--light-all-2 animationRightLeft tans3s"
                  style={{ flexGrow: "1" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="box-root  flex-flex flex-direction--column "
            style={{ flexGrow: "1", zIndex: "9" }}
          >
            <h1>
              {/*<a href="/" rel="dofollow">
                <img style={{ width: "11%" }} src={require("./acme.png")} />
                </a>*/}
            </h1>
            <div className="box-root  flex-flex flex-justifyContent--center"></div>
            <div className="formbg-outer">
              <div className="formbg uk-card uk-card-hover uk-card-body  p-0">
                <div className="formbg-inner padding-horizontal--48">
                  <span className="padding-bottom--15">
                    Sign in to your account
                  </span>
                  <form id="stripe-login">
                    <div className="field padding-bottom--24">
                      <TextField
                        fullWidth
                        value={email}
                        type="email"
                        label="Enter your Email"
                        id="filled-size-normal"
                        variant="filled"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>

                    <code style={{ backgroundColor: "transparent" }}>
                      {otpMsg}
                    </code>
                    <code style={{ backgroundColor: "transparent" }}>
                      {msg}
                    </code>

                    {otpViewer && otpViewerComponent}

                    <code style={{ backgroundColor: "transparent" }}>
                      {otpInputMsg}
                    </code>

                    <div className="field padding-bottom--24">
                      {/*                  <div className="grid--50-50">
                    <label for="password">Password</label>
                    <div className="reset-pass">
                      <a href="/">Forgot your password?</a>
                    </div>
    </div>*/}
                      {/*                    <TextField
                        fullWidth
                        disabled={true}
                        label="Enter your Password"
                        id="filled-size-normal"
                        variant="filled"
  />*/}
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label for="checkbox">
                        <input disabled type="checkbox" name="checkbox" /> Stay
                        signed in for a week
                      </label>
                    </div>
                    <div className="field padding-bottom--24">
                      {buttonComponent}
                    </div>
                    <div className="field">
                      <a
                        style={{ pointerEvents: "none" }}
                        className="ssolink"
                        href="/"
                      >
                        Use single sign-on (Google) instead
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              {/*<div className="footer-link padding-top--24">
            <span>Don't have an account? <a href="/">Sign up</a></span>
            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
              <span><a href="/">© Stackfindover</a></span>
              <span><a href="/">Contact</a></span>
              <span><a href="/">Privacy & terms</a></span>
            </div>
    </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
