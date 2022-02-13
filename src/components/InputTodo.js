import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title.trim()) {
      this.props.addTodosProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please the form cannot be empty');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.handleFormChange} name="title" className="input-text" />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
