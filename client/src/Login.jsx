import React, { useState,useEffect } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
// import _ from "lodash"
import {useNavigate} from "react-router-dom"
import * as EmailValidator from 'email-validator';
const Login = () => {
  const [email, setEmail] = useState("");
  // console.log(email);
  const navigate = useNavigate();
  const [msg,setMsg] = useState("");
  useEffect(()=>{setMsg("")},[email])
  const functionCall = async () => {
    // const result = await axios.get(`http://localhost:8000/${email}`).then(res=>{return(res)}).catch(err=>{return(err)})
    if(EmailValidator.validate(email)){
      const url = `https://signin.bindid-sandbox.io/authorize?client_id=bid_demo_acme&redirect_uri=https%3A%2F%2Fdemo.bindid-sandbox.io%2F_complete%2Facme&state=798105869&bindid_aux_link_title=More%20ways%20to%20verify&bindid_aux_link=https%3A%2F%2Fdemo.bindid-sandbox.io%2Fother_login&bindid_custom_message=Login%20to%20Acme&scope=openid%20bindid_network_info&display=page&prompt=login&response_type=code&login_hint=email%3A${(email)}`;
      console.log(url)
      window.location.replace(url)
    }else{
      setMsg("Enter Valid Email ");
    }

    // navigate(`/${url}`)
    // const result = await axios
    //   .get(url,{
    //     headers: { 'Content-Type': 'application/json',
    //   "Access-Control-Allow-Origin": "*",},
    //   mode:"no-cors",
    //   credentials:"same-origin",
    
    // })
    //   .then((res) => {
    //     console.log(res);
    //     return res;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     return err;
    //   });

      // console.log("Result",result)
  };

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
              <a href="/" rel="dofollow">
                <img style={{ width: "11%" }} src={require("./acme.png")} />
              </a>
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
                        type="email"
                        label="Enter your Email"
                        id="filled-size-normal"
                        variant="filled"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="field padding-bottom--24">
                      {/*                  <div className="grid--50-50">
                    <label for="password">Password</label>
                    <div className="reset-pass">
                      <a href="/">Forgot your password?</a>
                    </div>
    </div>*/}
                      <TextField
                        fullWidth
                        disabled={true}
                        label="Enter your Password"
                        id="filled-size-normal"
                        variant="filled"
                      />
                      <code>{msg}</code>
                    </div>
                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                      <label for="checkbox">
                        <input disabled type="checkbox" name="checkbox" /> Stay
                        signed in for a week
                      </label>
                    </div>
                    <div className="field padding-bottom--24">
                      <Button
                        onClick={() => {
                          functionCall();
                        }}
                        style={{ width: "90%" }}
                        variant="contained"
                      >
                        Submit
                      </Button>
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
