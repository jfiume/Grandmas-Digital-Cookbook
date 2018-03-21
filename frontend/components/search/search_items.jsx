import React, { Component } from 'react';
import styled from 'styled-components';

const SearchBox = styled.form`
  position: relative;
  left: 140px;
  top: -20px;
`;

class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "title",
      val: ""
    };
    this.onChangeVal = this.onChangeVal.bind(this);
    this.onSelectType = this.onSelectType.bind(this);
  }

  onChangeVal(e) {
    e.preventDefault;
    this.setState({val: e.target.value}, () => {
      this.props.searchRecipe({[this.state.type]: this.state.val});
    });
  }

  onSelectType(e) {
    e.preventDefault;
    this.setState({type: e.target.value});
  }

  render() {
    const { results } = this.props;
    return (
      <SearchBox>
        <label>Search:</label>
        <input type="text" value={this.state.val} onChange={this.onChangeVal} />
        <select onChange={this.onSelectType}>
          <option value="title">title</option>
          <option value="type_of_food">type of food</option>
        </select>
      </SearchBox>
    )
  }
}

export default SearchItems;
