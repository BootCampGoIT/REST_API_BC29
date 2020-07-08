import React from 'react';

const FormButton = ({addPostCounter}) => {
    return (
        <button type="submit" onClick={addPostCounter}>Add Post</button>
    );
};

export default FormButton;