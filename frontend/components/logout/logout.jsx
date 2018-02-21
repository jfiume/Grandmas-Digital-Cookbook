import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const host = window.location.host;

class LogOut extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <h1>You have successfully logged out of Granda's Digital Cookbook</h1>
        <a href="http://localhost:3000/users/sign_in">To Log back in</a>
      </section>
    )
  }
}

export default LogOut;
