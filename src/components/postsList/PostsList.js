import React from 'react';
import PostsListItem from './postsListItem/PostsListItem';
import css from './postList.module.css';

const PostsList = ({ posts, deletePost }) => {
    console.log("posts", posts)
    return (
        <ul className={css.postsList}>
            {posts.map(post => <PostsListItem {...post} deletePost={deletePost} key={post.id}/>)}
        </ul>
    );
}

export default PostsList;