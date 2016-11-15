import React from 'react';

export default class Week extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekTitle: "",
      weekLink: "",
      selectedWeek: "",
      style: {
        color: "blue",
        fontSize: "24px",
      },
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleLinkChange  = this.handleLinkChange.bind(this);
    this.onFormSubmit      = this.onFormSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ weekTitle: event.target.value });
  }

  handleLinkChange(event) {
    this.setState({ weekLink: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    let newEntry = {
      title: this.state.weekTitle,
      link: this.state.weekLink,
    }

    //send data back up
    this.props.addToList(newEntry, this.props.weekId);

    alert(`Survey says: ${this.state.weekTitle} ${this.state.weekLink} ${this.props.weekId}`);

    //teardown
    this.setState({ weekTitle: '', weekLink: '' })
  }

  render() {
    const week = this.props.week;

    const display = week.list.map((item, id) => {
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
        Week { week.weekNum }
      </h3>

      <p>Status: { this.props.status }</p>

      { display }

      <div>
        <h4>Add a new resource: </h4>
        <form onSubmit={ this.onFormSubmit } id={ this.props.weekID }>
          <label>Title: </label>
          <input
            type="text"
            placeholder="HOI"
            value={ week.weekTitle }
            onChange={ this.handleTitleChange }
          />

        <p></p>

        <label>Link URL: </label>
        <input
          type="text"
          placeholder="I'M TEMMY"
          value={ week.weekLink }
          onChange={ this.handleLinkChange }
        />

        <p></p>

        <button type="submit">
            Submit
        </button>
      </form>
      </div>

    </div>
  }
}
