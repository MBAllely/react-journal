import React from 'react';

export default class Week extends React.Component {
  render() {
    const display = this.props.week.list.map((item, id) => {
      return (
        <ul key={ id }>
          <p><a href={ item.link }> { item.title } </a></p>
        </ul>
      )
    })

    return <div>
      <h3
        style={ this.props.style }
        onClick={ this.props.highlight }>
        Week { this.props.weekNumber }
      </h3>

      <p>Status: { this.props.status }</p>

      { display }

      <div>
        <h4>Add a new resource:</h4>
        <label>Title: </label>
        <input
          type="text"
          placeholder="HOI"
          value={ this.props.weekTitle }
          onChange={ this.props.handleTitleChange }
        />

      <label>Link URL: </label>
        <input
          type="text"
          placeholder="I'M TEMMY"
          value={ this.props.weekLink }
          onChange={ this.props.handleLinkChange }
        />

      <button onClick={ this.props.handleSubmit }>
          Submit
        </button>
      </div>


    </div>
  }
}
