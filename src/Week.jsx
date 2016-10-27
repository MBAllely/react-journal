import React from 'react';

export default class Week extends React.Component {
  render() {
    return <div>
      <p> { this.props.week.title } </p>
      <p> { this.props.week.link } </p>
    </div>
  }
}
