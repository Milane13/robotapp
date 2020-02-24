import React, { Component } from "react";
import Card from "./components/card/Card";
import { robots } from "./robots";
import "tachyons";

class App extends Component {
  render() {
    return (
      <div>
        <Card
          id={robots[0].id}
          name={robots[0].name}
          email={robots[0].email}
          usrn={robots[0].username}
        />
        <Card
          id={robots[1].id}
          name={robots[1].name}
          email={robots[1].email}
          usrn={robots[1].username}
        />
        <Card
          id={robots[2].id}
          name={robots[2].name}
          email={robots[2].email}
          usrn={robots[2].username}
        />
        <Card
          id={robots[3].id}
          name={robots[3].name}
          email={robots[3].email}
          usrn={robots[3].username}
        />
      </div>
    );
  }
}

export default App;
