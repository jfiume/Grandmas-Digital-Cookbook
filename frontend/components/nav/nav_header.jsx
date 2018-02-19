import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

const HomeLink = styled.button`

`;

class NavHeader extends Component {
  constructor(props) {
    super(props)

    this.handleHome = this.handleHome.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleHome(e) {
    e.preventDefault();
    this.props.history.push("/recipes");
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(
      this.props.history.push("/logout")
    );
  }

  render () {
    return (
      <nav>
        <HomeLink onClick={this.handleHome}>HOME</HomeLink>
        <HomeLink onClick={this.handleLogOut}>Log Out</HomeLink>
      </nav>
    )
  }
}

export default NavHeader;
