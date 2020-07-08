import React, { Component } from 'react'
import FormButton from './form/FormButton';

class PostForm extends Component {
    state = {
        title: "",
        text: ""
    }

    inputHandleChange = (e) => {
        // e.persist();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    formHandleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewPost({ ...this.state });
        this.setState({ title: "", text: "" })
    }

    render() {
        const { title, text } = this.state;
        return (
            <form name="postForm" onSubmit={this.formHandleSubmit}>
                <input type="text" name="title" onChange={this.inputHandleChange} value={title} />
                <input type="text" name="text" onChange={this.inputHandleChange} value={text} />
                <FormButton addPostCounter={this.props.addPostCounter} formHandleSubmit={this.formHandleSubmit} />
            </form>
        );
    }
}

export default PostForm;