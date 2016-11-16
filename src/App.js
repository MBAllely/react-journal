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
      weeks: [
        {
          weekNum: 1,
          done: "done",
          list: [
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
        },
        {
          weekNum: 2,
          done: "done",
          list: [
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
        },
        {
          weekNum: 3,
          done: "done",
          list: [
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
        },
        {
          weekNum: 4,
          done: "done",
          list: [
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
        },
        {
          weekNum: 5,
          done: "done",
          list: [
            {
              title: 'React for Everyone #13 - Controlled Inputs',
              link: 'https://www.youtube.com/watch?v=BvtQMxekmH0'
            },
            {
              title: 'Forms',
              link: 'https://facebook.github.io/react/docs/forms.html'
            },
            {
              title: 'Synthetic Events in React',
              link: 'https://facebook.github.io/react/docs/events.html#mouse-events'
            },
            {
              title: 'JavaScript Fatigue',
              link: 'https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.rs1jyxnoq'
            }
          ]
        },
        {
          weekNum: 6,
          done: 'in progress',
          list: [
            {
              title: 'State and Lifecycle',
              link: 'https://facebook.github.io/react/docs/state-and-lifecycle.html'
            },
            {
              title: 'React.Component',
              link: 'https://facebook.github.io/react/docs/react-component.html'
            },
            {
              title: 'ReactJS Basics - #14 Component Lifecycle',
              link: 'https://www.youtube.com/watch?v=Oioo0IdoEls'
            },
            {
              title: 'Typical Use Cases for React Lifecycle Methods',
              link: 'http://stackoverflow.com/questions/38929991/what-are-typical-use-cases-for-react-lifecycle-methods-like-componentwillreceive'
            },
          ]
        },
      ]
    };
    this.addToList = this.addToList.bind(this);
    this.addWeek   = this.addWeek.bind(this);
  }

  addToList(newEntry, selectedWeek) {
    const dataCopy = Object.assign([], this.state);
    dataCopy.weeks[selectedWeek - 1].list.push(newEntry);
  }

  addWeek() {
    let newWeek = {
      weekNum: this.state.weeks.length + 1,
      done: "in progress",
      list: [{ title: 'default', link: 'props.com'}],
    };
    const dataCopy = Object.assign([], this.state.weeks);
    dataCopy.push(newWeek);
    this.setState({ weeks: dataCopy })
  }

  componentWillMount() {
    console.log("The component will mount");
  }

  componentDidMount() {
    console.log("The component mounted");
  }

  componentWillReceiveProps() {
    console.log("Component will receive props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update?", nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  componentDidUpdate() {
    console.log("The component updated");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  /*
    oh oh oh let's do some API stuff

    because

    why not

    XKCD has an api

    looks simple enough

    maybe it can display a random xkcd comic on each render

    yes.
    */

  render() {
    const weekDisplay = this.state.weeks.map((item, id) => {
      return (
        <ul key={ id }>

          <Week
            week={ item }
            addToList={ this.addToList }/>

        </ul>
      )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome to React, Marika!</h2>
        </div>

        <Header title={ this.state.title }/>

        <p className="App-intro">
          La ti da hellooooooo
        </p>
        <img src={"http:\/\/imgs.xkcd.com\/comics\/crossbows.png"} alt={"If you don't have an extension cord I can get that too.  Because we're friends!  Right?"}/>

        { weekDisplay }

        <button onClick={ this.addWeek }>Add new week!</button>

      </div>
    );
  }
}

export default App;
