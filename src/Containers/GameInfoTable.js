import React, { Component } from "react";
import GameTableHead from "../Components/GameTableHead";
import GameTableBody from "../Components/GameTableBody";

export default class GameInfoTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="table table-hover table-dark">
        <GameTableHead headElements={this.props.keys} />
        <GameTableBody userData={this.props.itemList} />
      </table>
    );
  }
}
