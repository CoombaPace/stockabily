import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

let stock_ticker = {};
let updateTickers = [];

class SearchBar extends Component {

    constructor(props) {
      super(props);
      this.state = {
        stockObj: {},
        ticker: "",
        search_ticker: "",
      };
      console.log("props: ", props)
    }
// TRACKS WHAT GOES INTO THE SEARCH BAR
  handleInputChange = event => {
    this.setState({ ticker: event.target.value })
    console.log("event.target.value: ", event.target.value)
  };

  resetName = event => {
    this.setState({ ticker: "" });
  }
  
  
// RUNS THE SUBMIT BUTTON, ONCLICK setState search_ticker = state.ticker
  handleFormSubmit = event => {
      event.preventDefault();
      console.log("Clicked Submit")
      // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
      this.setState({ search_ticker: this.state.ticker }, () => {
        this.searchTicker(this.state.search_ticker);
      })
    };

//   getUserId = event => {
//     event.preventDefault();
//     console.log("Start getUserId")
//     API.getUseId().then((res) => {
//       console.log(" getUseId res.data: ", res.data)
//       this.setState(res.data);
//       // console.log(" getUseId res: ", Object.keys(res))
//     })
//   }

//   GETS DATA FROM API, SETS stockInfo_keys
  searchTicker = query => {
    API.search(query)
    .then((res) => {
      stock_ticker[res.data.data[0].symbol] = res.data.data[0]
      // this.setState({ stocksInfo: stock_ticker }, () => {
      //   console.log("stock-ticker: ", this.state.stocksInfo)
      //   // stocksInfo_keys = Object.keys(this.state.stocksInfo)
      //   this.setState({ stocksInfo_keys: Object.keys(this.state.stocksInfo) }, () => {
      //     console.log("stocksInfo_keys: ", this.state.stocksInfo_keys)
      //   });
      // });

        var stock = {
          ticker: this.state.ticker,
          price: res.data.data[0].price,
          name: res.data.data[0].name,
          open: res.data.data[0].price_open,
          percentChange: res.data.data[0].change_pct,
          dayHigh: res.data.data[0].day_high,
          dayLow: res.data.data[0].day_low,
          marketCap: res.data.data[0].market_cap,
          avgVol: res.data.data[0].volume_avg
        }
        console.log("stock: ", stock)
        API.savestock(stock)
      }).then( (res) => {
        console.log("res: ", res)
        // this.props.setStockObj();
        // this.props.setDbStocksState();
        this.props.getdbstockdata();
        this.resetName();
      })
      
      .catch(err => console.log(err));
  };

  updatedbstockdata = event => {
    event.preventDefault();
    API.getstocks().then((res) => {
      res.data.forEach(element => {
        console.log("element.ticker: ", element.ticker)
        updateTickers.push(element.ticker);
      });
      console.log("updateTickers: ", updateTickers);
      updateTickers.forEach(element => {
        console.log("This is element: ", element)
        API.search(element)
          .then((res) => {
            console.log("res.data.data: ", res.data.data)

            var stock = {
              ticker: element,
              price: res.data.data[0].price,
              name: res.data.data[0].name,
              open: res.data.data[0].price_open,
              percentChange: res.data.data[0].change_pct,
              dayHigh: res.data.data[0].day_high,
              dayLow: res.data.data[0].day_low,
              marketCap: res.data.data[0].market_cap,
              avgVol: res.data.data[0].volume_avg
            }

            console.log("this is stock: ", stock)
            API.updateStocks(stock);
            this.props.getdbstockdata();
          })
      })
    })
  }
    
    render() {
        return (

            <div className="searchDiv">
            <form>
                <div className="form-group">
                    <label className="StockSearch"><h3>Search For Stock</h3></label>
                    <br></br>
                    <input className="col-12 form-control"
                        value={this.state.ticker}
                        type="text"
                        name="searchStock"
                        placeholder="Ticker"
                        onChange={this.handleInputChange}
                    />
                </div>
                <button type="submit" className="submitBtn btn btn-primary" onClick={this.handleFormSubmit}>
                    Submit
                </button>
                <button type="submit" className="submitBtn btn btn-primary" onClick={this.updatedbstockdata}>
                    Refresh
                </button>    
                <button type="submit" className="submitBtn btn btn-primary" onClick={this.getUserId}>
                    get user id
                </button>
                <button type="submit" className="submitBtn btn btn-primary" onClick={this.logout}>
                    Logout
                </button>
    
                
            </form>
            </div>
        )
    }
        
}



export default SearchBar;
