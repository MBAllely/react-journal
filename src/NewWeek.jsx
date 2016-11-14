import React from 'react';

export default class NewWeek extends React.Component {
  constructor() {
    super();

  }
  render() {
    console.log(this);
    return <div>
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

  }
}
