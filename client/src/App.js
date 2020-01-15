/* TODO
  Router: Wrap index.js in browser router, add Router & Switch to App.js.
  Remove SignIn/Out components => use get user id button instead.
  Route to sign up, sign in displays form in dropdown menu or modal and then displays logout button. 
*/

import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import StockCardHolder from "./components/StockCardHolder";
import Jumbotron from "./components/Jumbotron";

class App extends Component {

  render() {

    return (

      <Wrapper >
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
              

              <Jumbotron />
              <Nav/>
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

      </Wrapper>
    );
  }
}

export default App;
