import axios from 'axios';

const transformData = (response) => {
    const data = [];
    for (const key in response.data) {
        data.push({ id: key, ...response.data[key] })
    }
    return data;
    // const keys = Object.keys(response.data);
    // return keys.reduce((acc, key) => {
    //     acc.push({ id: key, ...response.data[key] })
    //     return acc
    // }, [])
}

export default {
    addPost(data) {
        try {
            return axios.post(`https://chat-74d03.firebaseio.com/posts.json`, data)
        } catch (error) {
            console.log(error)
        }
    },
    getPosts() {
        try {
            return axios.get(`https://chat-74d03.firebaseio.com/posts.json`).then(response => transformData(response))
        } catch (error) {
            console.log(error)
        }
    },

    deletePostById(id) {
        try {
            return axios.delete(`https://chat-74d03.firebaseio.com/posts/${id}.json`)
        } catch (error) {
            return error
        }
    }
};



// export { addPost, getPosts, deletePostById }
