import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import StockCards from "../StockCards"
import SearchBar from "../SearchBar"
import Modal from "../Modal/Modal"
import TradingViewWidget from 'react-tradingview-widget';


// let updateTickers = null;

class StockCardHolder extends Component {

  
    state = {
      dbstocks: [],
      showModal: false,
      // price: price,
      // name: name,
      // open: open,
      // percentChange: percentChange,
      // dayHigh: dayHigh,
      // dayLow: dayLow,
      // marketCap: marketCap,
      // avgVol: avgVol
    };

  componentDidMount() {
    this.getdbstockdata();
  }


    // MODAL CODE
    // Modal Show and Close functions:
    // handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx });
    // handleCloseModal = () => this.setState({ showModal: false });
  

  // GET DATA FROM THE DB
  getdbstockdata = event => {
    API.getstocks().then((res) => {
      console.log("res.data: ", res.data)
      this.setState({ dbstocks: res.data })
      console.log("dbstocks:", this.state.dbstocks)
      })
  }
  //  handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx })

  // DELETE A STOCK FROM DB AND PAGE
  deleteDBstockData = idx => {
    let delTicker = idx;
    API.getstocks().then((idx) => {
      console.log("delTicker: ", idx.data[delTicker].ticker);
      delTicker = {
        ticker: idx.data[delTicker].ticker
      };
      console.log("this is del ticker from deleteDBstockData: ", delTicker)
      API.deleteStocks(delTicker);
      this.getdbstockdata();
    });
  }

  // updatedbstockdata = event => {
  //   event.preventDefault();
  //   console.log("prevent default")
  //   API.getstocks().then((res) => {
  //     console.log("res.data: ", res.data)
  //     this.setState({ dbstocks: res.data })
  //     res.data.forEach(element => {
  //       console.log("element.ticker: ", element.ticker)
  //       updateTickers.push(element.ticker);
  //     });
  //     console.log("updateTickers: ", updateTickers);
  //     updateTickers.forEach(element => {
  //       console.log("This is element: ", element)
  //       API.search(element)
  //         .then((res) => {
  //           console.log("res.data.data: ", res.data.data)

  //           var test = {
  //             ticker: element,
  //             price: res.data.data[0].price,
  //             name: res.data.data[0].name,
  //             open: res.data.data[0].price_open,
  //             percentChange: res.data.data[0].change_pct,
  //             dayHigh: res.data.data[0].day_high,
  //             dayLow: res.data.data[0].day_low,
  //             marketCap: res.data.data[0].market_cap,
  //             avgVol: res.data.data[0].volume_avg
  //           }

  //           console.log("this is test: ", test)
  //           API.updateStocks(test);
  //           // this.getdbstockdata();
  //         })
  //     })
  //   })
  // }

  

  

  

  
  render() {
    
    return (
      
      <div className='container'>
        <SearchBar
          dbstocks={this.state.dbstocks}
          getdbstockdata={() => this.getdbstockdata()}
          />
              <div className='row'>
                <div className='col-12'>
                  <div className='card-deck'>

                    {this.state.dbstocks.map((data, idx) => (
                      
                          <StockCards
                            key={data.id}
                            dbstocks={this.state.dbstocks}
                            data={data}
                            getdbstocksdata={() => this.getdbstockdata()} 
                            handleShowMessageClick={() => this.handleShowMessageClick(idx)}
                            deleteDBstockData={() => this.deleteDBstockData(idx)}
                            >
                          </StockCards>
                      
                    ))}

                    {/* {this.state.showModal ? (
                      <Modal onClose={this.handleCloseModal}>
                        <span>Ticker: {this.state.dbstocks[this.state.clickedIndex].ticker}  |  Name: {this.state.dbstocks[this.state.clickedIndex].name}</span>
                        <br />
                        <span>Stock Price: {this.state.dbstocks[this.state.clickedIndex].price}   |   Change %: {this.state.dbstocks[this.state.clickedIndex].percentChange}</span>
                        <br />
                        <span>Open: {this.state.dbstocks[this.state.clickedIndex].open}   |   Day Low: {this.state.dbstocks[this.state.clickedIndex].dayLow}</span>
                        <br />
                        <span>Day High: {this.state.dbstocks[this.state.clickedIndex].dayHigh}   |   Avg. Vol. {this.state.dbstocks[this.state.clickedIndex].avgVol}</span>
                        <br />
                        <TradingViewWidget symbol={`${this.state.dbstocks[this.state.clickedIndex].ticker}`} height={500} width={600} />
                      </Modal>
                    ) : null} */}
                  </div>
                </div>
              </div>
            </div>
      

    );
  }
}

export default StockCardHolder;
