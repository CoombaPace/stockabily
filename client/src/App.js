import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import StockCardHolder from "./components/StockCardHolder";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Modal from "./components/Modal/Modal"
import Jumbotron from "./components/Jumbotron";

class App extends Component {

  render() {

    return (

      <Wrapper >
        <Router>
          <div>
            <div>
              {/* <Nav
                displaysignup_function={this.displaysignup_function}
                displaysignup={this.state.displaysignup}
                isUserLoggedIn={this.state.isUserLoggedIn}
                getUseId={this.state.getUseId}
                // logOut= 
                userLogin={this.logOut}
              /> */}


              {/* <Route
                path="/signedIn"
              />

              <Route
                path="/signup"
                // exact  component={SignUp} 
                // https://tylermcginnis.com/react-router-pass-props-to-components/
                render={(props) => <SignUp {...props}
                  logOut={this.logOut} />}
              />

              <Route exact path="/signin" component={SignIn} /> */}

              <Jumbotron />

              {/* <SearchBar
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                getdbstockdata={this.getdbstockdata}
                refresh={this.updatedbstockdata}
                getUserId={this.getUserId}
                logout={this.logout}
              /> */}
            </div>

            <StockCardHolder/>

            {/* <MiniChart></MiniChart> */}
          </div>
        </Router>

      </Wrapper>
    );
  }
}

export default App;
