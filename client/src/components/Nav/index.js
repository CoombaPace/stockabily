import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../../utils/API";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import "./style.css";

let signup_dom = "";



class Nav extends Component {

    state = {
        signupformfirstname: "",
        signupformlastname: "",
        signupformusername: "",
        signupformpassword: "",
        displaysignin: "",
        displaysignup: "",
        isUserLoggedIn: false,
        getUseId: ""
    }
  
    signINFormSubmit = event => {
      event.preventDefault()
      console.log("signINFormSubmit")
    }
  
    clicksignIN = () => {
      if (!this.state.displaysignin) {
        this.setState({ displaysignin: true }, () => {
          console.log("this.state.displaysignin: ", this.state.displaysignin)
        })
      } else {
        this.setState({ displaysignin: false }, () => {
          this.getUserId();
          console.log("this.state.displaysignin: ", this.state.displaysignin)
        })
      }
    }
    displaysignup_function = () => {
  
      if (!this.state.displaysignup) {
        this.setState({ displaysignup: true }, () => {
          console.log("this.state.displaysignup: ", this.state.displaysignup)
        })
      } else {
        this.setState({ displaysignup: false }, () => {
          console.log("this.state.displaysignup: ", this.state.displaysignup)
        })
      }
    }
  
    clicksignIN = () => {
      if (!this.state.displaysignin) {
        this.setState({ displaysignin: true }, () => {
          console.log("this.state.displaysignin: ", this.state.displaysignin)
        })
      } else {
        this.setState({ displaysignin: false }, () => {
          console.log("this.state.displaysignin: ", this.state.displaysignin)
        })
      }
    }
  
    logout = event => {
      event.preventDefault();
      API.logout().then((res) => {
        console.log(" logout res.data: ", res.data)
        // console.log(" getUseId res: ", Object.keys(res))
      })
    }
  
    getUserId = event => {
      event.preventDefault();
      console.log("Start getUserId")
      API.getUseId().then((res) => {
        console.log(" getUseId res.data: ", res.data)
        this.setState(res.data);
        // console.log(" getUseId res: ", Object.keys(res))
      })
      if (!this.state.isUserLoggedIn) {
          signup_dom =
              <div >
                  <li className="nav-item signIn navbar-nav mr-auto">
                      <a href="/signin" className="nav-link navbar-nav ">Sign In</a>
                  </li>
                  <li className="nav-item signUp navbar-nav mr-auto">
                      <a href="/signup" className="nav-link navbar-nav ">Sign Up</a>
                  </li>
              </div>
      } else {
          signup_dom =
              <li className="nav-item">
                  <a href="/logout" className="nav-link">Logout</a>
              </li>
      }
    }
      
    
    render() {
        return (
            
            <Router>
              <nav className="navbar navbar-expand-lg navbar-custom">
                <div className="container">
                    <a className="navbar-brand navbar-nav" href="/">Stockabily Login</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/logout" className="nav-link">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a href="/signin" className="nav-link">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a href="/signup" className="nav-link">Sign Up</a>
                            </li>
                            {signup_dom}

                        </ul>
                    </div>
                    <div>
                    <Route
                path="/signedIn"
              />

              <Route
                path="/signup"
                // exact  component={SignUp} 
                // https://tylermcginnis.com/react-router-pass-props-to-components/
                render={(props) => <SignUp {...props}
                  logOut={this.logOut} />}
              />

              <Route exact path="/signin" component={SignIn} />
                    </div>
                </div>
              </nav>
            </Router>
        )
    }
}

export default Nav;
