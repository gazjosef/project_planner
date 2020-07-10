import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// LAYOUT
import { Navbar } from './Components/Layout/Navbar';

// PAGES
import Home from './Components/Pages/Home';
import Journal from './Components/Pages/Journal';
import Progress from './Components/Pages/Progress';
import { Settings } from './Components/Pages/Settings';

// const style = {
//   position: "relative",
//   margin: "50px auto"
// };

class App extends Component {
  // onDayClick = (e, day) => {
  //   alert(day);
  // };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/journal" component={Journal} />
            <Route exact path="/progress" component={Progress} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
          {/* <Calendar
            style={style}
            width="302px"
            onDayClick={(e, day) => this.onDayClick(e, day)}
          /> */}
        </div>
      </Router>
    );
  }
}

export default App;
