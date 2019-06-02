import React, { Component } from "react";
import CsvParse from "@vtex/react-csv-parse";
import GameInfoTable from "./Containers/GameInfoTable";
import "../src/styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      name: ""
    };
  }

  handleData = data => {
    this.setState({ data: data });
    console.log(this.state.data[0]);
  };

  handleError = err => {
    this.setState({ data: err });
  };

  // onSearchChange = data => {
  //   this.setState({ data: data.Name });
  // };

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
    const tableData = this.state.data.filter(
      el => el.Name === event.target.value
    );
    if (tableData[0]) {
      this.setState({ data: tableData });
    }
    console.log(tableData);
  };
  render() {
    const keys = [
      "Rank",
      "Name",
      "Platform",
      "Year",
      "Genre",
      "Publishers",
      "Global_Sales"
    ];
    return (
      <div className="main-container">
        <CsvParse
          keys={keys}
          onDataUploaded={this.handleData}
          onError={this.handleError}
          render={onChange => <input type="file" onChange={onChange} />}
        />
        <br />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Search By Name"
          value={this.state.name}
          onChange={e => this.onSearchChange(e)}
        />
        <br />
        <br />
        <GameInfoTable itemList={this.state.data} keys={keys} />
      </div>
    );
  }
}
