import React, { Component } from 'react'
import PostForm from './postForm/PostForm'
import api from './services/api'
import PostsList from './postsList/PostsList';


class App extends Component {
    state = {
        posts: [],
        counter: 0,
        isLoading: false,
        error: ""
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        api.getPosts()
            .then(posts => this.setState({ posts, counter: posts.length }))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
    }

    addNewPost = async (newPost) => {
        const response = await api.addPost(newPost);
        const post = { ...newPost, id: response.data.name }
        this.setState(prevState => ({
            posts: [...prevState.posts, post]
        }))
    }

    deletePost = (id) => {
        api.deletePostById(id)
        .then((response) => {
            console.log(response)
            this.setState(prevState => ({
                posts: prevState.posts.filter(post => post.id !== id),
                counter: prevState.counter - 1
            }))
        })
        .catch(error=> this.setState({ error: `${error.config.data}` }))

    }

    addPostCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }


    render() {
        const { posts, isLoading, error } = this.state;
        return (
            <>
                <PostForm addNewPost={this.addNewPost} addPostCounter={this.addPostCounter} />
                <div >
                    {isLoading && <h2 style={{ color: "white", padding: "10px" }}>Loading ...</h2>}
                    {error && <h2 style={{ color: "white", padding: "10px" }}>{error}</h2>}
                    <PostsList posts={posts} deletePost={this.deletePost} />
                </div>
            </>

        );
    }
}

export default App;