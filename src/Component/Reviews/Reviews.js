import React from 'react';
import useFood from '../../hooks/useFood';
import SixComments from '../SixComments/SixComments';
import './Reviews.css'


const Reviews = () => {
    const [comments, setComments] = useFood([]);

    return (
        <div className='customer-six-comments'>
            <h1>CUSTOMER REVIEWS({comments.length})</h1>
            <div className='six-comments'>
                {
                    comments.map(comment => <SixComments key={comment.id} comment={comment}></SixComments>)
                }
            </div>
            <p className='review-down-p'><small>Good food always good for health.Eat good food, stay good mood.</small></p>
        </div>
    );
};

export default Reviews;