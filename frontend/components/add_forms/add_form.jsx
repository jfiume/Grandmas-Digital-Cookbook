import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';






class AddRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      type_of_food: '',
      ingredients: '',
      prep: '',
      directions: ''
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <form>
        <label>image <br/>
        <input type="text"
          value={this.state.image}
          onChange={this.update('image')}
        />
        </label>
      </form>
    )
  }
}

export default withRouter(AddRecipeForm);
