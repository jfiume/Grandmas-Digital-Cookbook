import React, { Component } from 'react';


class SearchResultItems extends Compent {
  constructor(props) {
    super(props);
    this.state = {
      type: "title";
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
      <form>
        <label>Search:</label>
        <input type="text" value={this.state.val} onChange={this.onChangeVal} />
        <select onChange={this.onSelectType}>
          <option value="title">title</option>
          <option value="type of food">type of food</option>
        </select>
      </form>
    )
  }
}

export default SearchResultItems;
