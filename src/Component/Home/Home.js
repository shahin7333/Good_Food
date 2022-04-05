import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFood from '../../hooks/useFood';
import Comment from '../Comment/Comment';
import img from '../img/ice-cream.png';
import SixComments from '../SixComments/SixComments';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    const showComments = () => {
        const path = `/reviews`;
        navigate(path);
    }
    const [comments, setComments] = useFood();

    return (
        <div className='home'>
            <div className='home-page-container'>
                <div className='page-title'>
                    <h1>YOU WILL KNOW</h1>
                    <h1 className='good-food'>GOOD FOOD</h1>
                    <p><b>Good food good mood.</b>We're all about good recipes, and about quality home cooking that everyone can enjoy.You will get the natural environmental place here.Also get many awesome services.</p>
                    <button>Order</button>
                </div>
                <div className='img-home'>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className='reviews'>
                <h1>CUSTOMER REVIEWS({comments.length})</h1>
                <div className='review-container'>
                    {
                        comments.map(comment => <SixComments key={comment.id} comment={comment}></SixComments>)
                    }
                </div>
                <button onClick={showComments} className='see-all-reviews'>See all reviews</button>
            </div>
        </div>

    );
};

export default Home;