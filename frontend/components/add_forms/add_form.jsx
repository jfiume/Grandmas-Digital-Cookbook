import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const InputForm = styled.form`
  top: 100px;
  position: relative;
`;

const Labels = styled.label`

`;




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
      <InputForm>
        <Labels>image
        <input type="text"
          value={this.state.image}
          onChange={this.update('image')}
        />
        </Labels>
        <Labels>title
        <input type="text"
          value={this.state.title}
          onChange={this.update('title')}
        />
        </Labels>
        <Labels>type of food
        <input type="text"
          value={this.state.type_of_food}
          onChange={this.update('type_of_food')}
        />
        </Labels>
        <Labels>ingredients
        <input type="text"
          value={this.state.ingredients}
          onChange={this.update('ingredients')}
        />
        </Labels>
        <Labels>prep
        <input type="text"
          value={this.state.prep}
          onChange={this.update('prep')}
        />
        </Labels>
        <Labels>directions
        <input type="text"
          value={this.state.directions}
          onChange={this.update('directions')}
        />
        </Labels>
      </InputForm>
    )
  }
}

export default withRouter(AddRecipeForm);
