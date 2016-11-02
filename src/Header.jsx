import React from 'react';

// export default class Header extends React.Component {
//   render() {
//     return <h1> { this.props.title } </h1>
//   }
// }

const Header = ({title}) => {
  return <h1> { title } </h1>
}

Header.proptypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
