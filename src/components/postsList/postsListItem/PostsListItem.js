import React from 'react';
import css from './postsListItem.module.css'

const PostsListItem = ({ id, title, text, deletePost }) => {
    return (
        <li id={id} className={css.postListItem}>
            <h2 className="postListTitle">{title}</h2>
            <p className="postListText">{text}</p>
            <button onClick={() => deletePost(id)}>Delete</button>
        </li>

    );
}

export default PostsListItem;