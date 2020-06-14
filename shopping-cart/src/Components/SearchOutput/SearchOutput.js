import React, { Component } from "react";
import "./SearchOutput.css";
import Footer from "../Footer";
export default class SearchOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResultData: [],
      searchText:this.props.location.data
    };
    
    this.dummyData = [
        { id: "1", name: "fruits_1", price: "$2.99", img: "fruits_1.jpg" },
        { id: "2", name: "fruits_2", price: "$3.99", img: "fruits_2.jpg" },
        { id: "3", name: "fruits_3", price: "$1.99", img: "fruits_3.jpg" },
        { id: "5", name: "masks_2", price: "$5.99", img: "masks_2.jpg" },
        { id: "6", name: "meat_1", price: "$6.99", img: "meat_1.jpg" },
    ];
  }

  componentDidMount() {
    this.searchOut();
  }

  searchOut() {
    let tempData = [];
    for (let i = 0; i < this.dummyData.length; i++) {
      if (this.dummyData[i].name.toLowerCase().indexOf(this.state.searchText) > -1) {
        tempData.push(this.dummyData[i]);
      }
    }
    this.setState({
      searchResultData: tempData
    });
  }


  render() {
    return (
      <div>
          <div className="search-results">
            <span className="search-results-head">
              Search Results
            </span>
            <div>
              <div className="grid-row">
                {this.state.searchResultData.map((ele) => (
                  <div className="grid-item">
                    <div className="image-block">
                      <img alt={ele.name} src={require(`./../Gallery/${ele.img}`)} />
                    </div>
                    <div>
                      <span>{ele.name}</span>
                      <span>{ele.price}</span>
                        <div>
                        <button>
                          Add to cart
                        </button>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

