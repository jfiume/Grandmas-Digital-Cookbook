import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const host = window.location.host;
const Welcome = styled.h1`
  margin-top: 80px;
`;
const LinkStyle = {
  textDecoration: 'none',
  color: 'black',
  border: 'solid red 5px',
  backgroundColor: 'red'
}

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Welcome>Welcome to Grandma's Digital Cookbook</Welcome>
        <Link to="/recipes" style={LinkStyle}>Home Page</Link>
        {/* <a href="https://grandmas-digital-cookbook.herokuapp.com/users/sign_in"> Sign In</a> */}
      </section>
    )
  }
}

export default Splash;
