import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const host = window.location.host;

class Splash extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <h1>Welcome to Grandma's Digital Cookbook</h1>
        <a href="http://localhost:3000/users/sign_in"> Sign In</a>
      </section>
    )
  }
}

export default Splash;
