import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Week from './Week.jsx';

class App extends Component {

  /*
  Using create-react-app, build a simple site that has a header component with its title set through props, and three separate instances of a "week" component that get their props from your top-level app state. That state should be one large collection of links to videos and articles broken up by their respective weeks.
  */

  /*
  -Build a simple header component that accepts the actual title as props vs. hardcoded

  - Build a 'week' component that gets its props from the corresponding 'week' object in the app's top level state

  - Only have two components, a header, and three instances of 'week' with different props for each week
  */


  constructor(props) {
    super(props);
    this.state = {
      title: "This is the header!",
      week1: {
        title: "Week 1",
        link: 'http://thenicestplaceontheinter.net/'
      },
      week2: {
        title: "Week 2",
        link: 'https://procatinator.com/'
      },
      week3: {
        title: "Week 3",
        link: 'http://www.purple.com/'
      }
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          La ti da hellooooooo
        </p>

        <Header title={ this.state.title }/>

        <Week week={ this.state.week1 }/>
        <Week week={ this.state.week2 }/>
        <Week week={ this.state.week3 }/>
      </div>
    );
  }
}

export default App;
