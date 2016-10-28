import React from 'react';

export default class Week extends React.Component {
  render() {

    const display = this.props.week.map((item, id) => {
      return (
        <ul key={ id }>
          <p><a href={ item.link }> { item.title } </a></p>
        </ul>
      )
    })

    return <div>
      <h3>Week { this.props.weekNumber }</h3>
      { display }
    </div>
  }
}
