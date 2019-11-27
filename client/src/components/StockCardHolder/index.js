import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import StockCards from "../StockCards"
import SearchBar from "../SearchBar"
import Modal from "../Modal/Modal"
import TradingViewWidget from 'react-tradingview-widget';

class StockCardHolder extends Component {

  
    state = {
      dbstocks: [],
      showModal: false,
    };

  componentDidMount() {
    this.getdbstockdata();
  }

    // MODAL CODE
    // Modal Show and Close functions:
    // handleShowMessageClick = (idx) => this.setState({ showModal: true, clickedIndex: idx });
    // handleCloseModal = () => this.setState({ showModal: false });

  // SETS dbstocks STATE AFTER HALF A SECOND
  setDbStocksState = () => {
    console.log("waiting")
    setTimeout(() => {
      console.log('calling');
      this.getdbstockdata();
    }, 500); 
  }

  // GET DATA FROM THE DB
  getdbstockdata = event => {
    API.getstocks().then((res) => {
      console.log("prev state: ", this.state.dbstocks)
      this.setState({ dbstocks: res.data });
      console.log("nextState: ", this.state.dbstocks)
    }).catch(err => console.log(err));
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
      console.log("delticker from deleteDBstockData: ", delTicker)
      API.deleteStocks(delTicker);
      this.setDbStocksState();
    });
  }
  
  render() {
    
    return (
      
      <div className='container'>
        <SearchBar
          dbstocks={this.state.dbstocks}
          getdbstockdata={() => this.getdbstockdata()}
          setDbStocksState={() => this.setDbStocksState()}
          />
              <div className='row'>
                <div className='col-12'>
                  <div className='card-deck'>

                    {this.state.dbstocks.map((data, idx) => (
                      
                          <StockCards
                            key={this.state.dbstocks.index}
                            data={data}
                            handleShowMessageClick={() => this.handleShowMessageClick(idx)}
                            deleteDBstockData={() => this.deleteDBstockData(idx)}
                            />
                      
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
