// import React, { Component } from "react";
// import API from "../../utils/API";

// import "./style.css";

// let signup_dom = ""

// state = {
//     signupformfirstname,
//     signupformlastname,
//     signupformusername,
//     signupformpassword,
//     displaysignin,
//     displaysignup,
//     isUserLoggedIn: false,
//     getUseId
// }

// // START SIGN IN/UP CODE
//   // ========================================================================
//   signUpFormSubmit = event => {
//     event.preventDefault()
//     console.log("signUpFormSubmit: ")
//     let formdata = {
//       firstname: this.state.signupformfirstname,
//       lastname: this.state.signupformlastname,
//       username: this.state.signupformusername,
//       password: this.state.signupformpassword
//     }

//     API.sendSignUpForm(formdata)
//     // this.logOut()
//   };

//   signINFormSubmit = event => {
//     event.preventDefault()
//     console.log("signINFormSubmit")

//   }

//   handleFormInputChange = event => {
//     console.log("event.target.value: ", event.target.value)
//     console.log("event.target.name: ", event.target.name)
//     this.setState({ [event.target.name]: event.target.value }, () => {
//       console.log("this.state.signupformfirstname: ", this.state.signupformfirstname)
//       console.log("this.state.signupformlastname: ", this.state.signupformlastname)
//       console.log("this.state.signupformusername: ", this.state.signupformusername)
//       console.log("this.state.signupformpassword: ", this.state.signupformpassword)
//     });
//   }

//   clicksignup = () => {

//     if (!this.state.displaysignup) {
//       this.setState({ displaysignup: true }, () => {
//         console.log("this.state.displaysignup: ", this.state.displaysignup)
//       })
//     } else {
//       this.setState({ displaysignup: false }, () => {
//         console.log("this.state.displaysignup: ", this.state.displaysignup)
//       })
//     }
//   }

//   clicksignIN = () => {
//     if (!this.state.displaysignin) {
//       this.setState({ displaysignin: true }, () => {
//         console.log("this.state.displaysignin: ", this.state.displaysignin)
//       })
//     } else {
//       this.setState({ displaysignin: false }, () => {
//         this.getUserId();
//         console.log("this.state.displaysignin: ", this.state.displaysignin)
//       })
//     }
//   }
//   displaysignup_function = () => {

//     if (!this.state.displaysignup) {
//       this.setState({ displaysignup: true }, () => {
//         console.log("this.state.displaysignup: ", this.state.displaysignup)
//       })
//     } else {
//       this.setState({ displaysignup: false }, () => {
//         console.log("this.state.displaysignup: ", this.state.displaysignup)
//       })
//     }
//   }

//   clicksignIN = () => {
//     if (!this.state.displaysignin) {
//       this.setState({ displaysignin: true }, () => {
//         console.log("this.state.displaysignin: ", this.state.displaysignin)
//       })
//     } else {
//       this.setState({ displaysignin: false }, () => {
//         console.log("this.state.displaysignin: ", this.state.displaysignin)
//       })
//     }
//   }

//   logout = event => {
//     event.preventDefault();
//     API.logout().then((res) => {
//       console.log(" logout res.data: ", res.data)
//       // console.log(" getUseId res: ", Object.keys(res))
//     })
//   }

//   getUserId = event => {
//     event.preventDefault();
//     console.log("Start getUserId")
//     API.getUseId().then((res) => {
//       console.log(" getUseId res.data: ", res.data)
//       this.setState(res.data);
//       // console.log(" getUseId res: ", Object.keys(res))
//     })
//   }
//   if (!this.state.isUserLoggedIn) {
//     signup_dom =
//         <div >
//             <li className="nav-item signIn navbar-nav mr-auto">
//                 <a href="/signin" className="nav-link navbar-nav ">Sign In</a>
//             </li>
//             <li className="nav-item signUp navbar-nav mr-auto">
//                 <a href="/signup" className="nav-link navbar-nav ">Sign Up</a>
//             </li>
//         </div>
// } else {
//     signup_dom =
//         <li className="nav-item">
//             <a href="/logout" className="nav-link">Logout</a>
//         </li>
// }

// class Nav extends Component {
    
//     render() {
//         return (
            
//             <nav className="navbar navbar-expand-lg navbar-custom">
//                 <div className="container">
//                     <a className="navbar-brand navbar-nav" href="/">iStock Login</a>
//                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
//                         aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbar">
//                         <ul className="navbar-nav ml-auto">
//                             {/* <li className="nav-item">
//                                 <a href="/logout" className="nav-link">Logout</a>
//                             </li> */}
//                             {/* <li className="nav-item">
//                                 <a href="/signin" className="nav-link">Sign In</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a href="/signup" className="nav-link">Sign Up</a>
//                             </li> */}
//                             {signup_dom}

//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//         )
//     }
// }

// export default Nav;
