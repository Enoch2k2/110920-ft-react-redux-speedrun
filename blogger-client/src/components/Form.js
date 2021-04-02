import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBlog } from '../actions';

class Form extends Component {
  state = {
    title: "",
    content: ""
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBlog(this.state, this.props.history);
  }

  render() {
    return (
      <div>
        <h3>Create Blog</h3>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange } />
          </div>
          <br />
          <div>
            <p><label htmlFor="content">Content</label></p>
            <textarea id="content" name="content" value={ this.state.content } onChange={ this.handleChange }></textarea>
          </div>
          <br />
          <input type="submit" value="Create Blog" />
        </form>
      </div>
    )
  }
}

export default connect(null, { addBlog })(Form)
