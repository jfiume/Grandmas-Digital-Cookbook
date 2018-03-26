import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const host = window.location.host;
const Welcome = styled.h1`
  margin-top: 80px;
`;

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Welcome>Welcome to Grandma's Digital Cookbook</Welcome>
        {/* <a href="https://grandmas-digital-cookbook.herokuapp.com/users/sign_in"> Sign In</a> */}
      </section>
    )
  }
}

export default Splash;
