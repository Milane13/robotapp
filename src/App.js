import React, { Component } from "react";
import CardList from "./components/cardList/CardList.js";
import SearchBox from "./components/searchBox/SearchBox.js";
import { robots } from "./robots";
import "tachyons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: robots,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);

    return (
      <div className="tc">
        <h1> RobotsFriends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
