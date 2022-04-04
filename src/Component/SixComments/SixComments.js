import React from 'react';

const SixComments = (props) => {
    const { name, review, comment } = props.comment;
    return (
        <div>
            <div className='review-div'>
                <h3>{name}</h3>
                <p className='rating'>Rating: {review}</p>
                <p><small>{comment}</small></p>

            </div>
        </div>
    );
};

export default SixComments;