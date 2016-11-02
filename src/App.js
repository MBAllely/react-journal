import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Week from './Week.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "This is the header!",
      value: "",
      week1: [
        {
          title: 'JavaScript Assessment',
          link: 'https://github.com/rmurphey/js-assessment',
        },
        {
          title: 'DevDocs, offline version',
          link: 'http://devdocs.io/offline',
        },
        {
          title: 'FunFunFunctions: Higher Order Functions',
          link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
        },
        {
          title: 'FunFunFunctions: ES6/2015 var, let, and const',
          link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
        },
        {
          title: 'FunFunFunctions: ES6/2015 arrow functions',
          link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
        },
        {
          title: 'Industry Talk: Women in tech',
          link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02',
        },
        {
          title: 'JavaScript: Understanding the Weird Parts',
          link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII',
        },
        {
          title: 'ES6 at a glance',
          link: 'http://es6-features.org/',
        },
        {
          title: 'Essential ES6 / ES2015 JavaScript',
          link: 'https://www.youtube.com/watch?v=CozSF5abcTA',
        },
        {
          title: 'Javascript ES6 Cheatsheet - the best of JS ES6',
          link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4',
        },
      ],
      week2: [
        {
          title: 'AirBnb Styleguide',
          link: 'https://github.com/airbnb/javascript',
        },
        {
          title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
          link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
        },
        {
          title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
          link: 'https://frontendmasters.com/courses/computer-science/',
        },
        {
          title: 'Git Intro',
          link:'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
        },
        {
          title: 'Sublime Text Power User Book by Wes Bos',
          link: 'https://sublimetextbook.com/',
        },
        {
          title: 'Atom keyboard shortcuts',
          link: '',
        },
      ],
      week3: [
        {
          title: 'Thinking in React',
          link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
        },
        {
          title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
          link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
        },
        {
         title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
          link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
        },
        {
          title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
          link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s',
        },
        {
          title: 'React on ES6+',
          link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus',
        },
        {
          title: 'Learn ES2015 · Babel',
          link: 'https://babeljs.io/docs/learn-es2015/',
        },
        {
          title: 'Our First 50,000 Stars - React Blog (History of React)',
          link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html',
        },
        {
          title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
          link: 'https://youtu.be/DN4yLZB1vUQ',
        },
        {
          title: 'React Developer Tools (for Chrome)',
          link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        },
      ],
      week4: [
        {
          title: 'Handling Events',
          link: 'https://facebook.github.io/react/docs/handling-events.html',
        },
        {
          title: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked',
          link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.qmv1l2vam',
        },
        {
          title: 'ReactJS Basics - #7 Events & ReactJS',
          link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8',
        },
        {
          title: 'ReactJS Basics - #8 State of Components',
          link: 'https://www.youtube.com/watch?v=e5n9j9n83OM&index=9&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS',
        },
        {
          title: 'ReactJS Basics - #9 How does ReactJS Update the DOM?',
          link: 'https://www.youtube.com/watch?v=Iw2BLUjQo1E&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=10',
        },
        {
          title: 'ReactJS Basics - #10 Stateless Components',
          link: 'https://www.youtube.com/watch?v=SEkfzqIgvTo&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=11',
        },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Computer sez: ' + this.state.value);
  }

  /*
    HOKAY so you're gonna make a form that creates a new title/link object.

    You're going to have to update the state with setState

    You're going to need to do some onChange stuff

    and some onSubmit stuff

    fuck it let's go buy cucumbers
  */

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, Marika!</h2>
        </div>
        <Header title={ this.state.title }/>
        <p className="App-intro">
          La ti da hellooooooo
        </p>


        <input
          type="text"
          placeholder="HOI I'M TEMMY"
          value={ this.state.value }
          onChange={ this.handleChange }
        />

        <button onClick={ this.handleSubmit }>
          Submit
        </button>

        <Week weekNumber="1" week={ this.state.week1 }/>
        <Week weekNumber="2" week={ this.state.week2 }/>
        <Week weekNumber="3" week={ this.state.week3 }/>
        <Week weekNumber="4" week={ this.state.week4 }/>
      </div>
    );
  }
}

export default App;
