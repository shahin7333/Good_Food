import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='ans-ques-container'>
            <h2>This block is about question-answer.</h2>
            <div className='answer-question'>
                <div className='answer'>
                    <h3>What is context API?</h3>
                    <p>The definition of context API is, a react structure that enable you to exchange unique details and assist a solving prop-drilling from all levels of your application. The context API is a way for a React app to effectively produce global variables that can be passed around. That means context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
                </div>
                <div className='answer'>
                    <h3>What is semantic tag?</h3>
                    <p>Semantic tag is known also semantic HTML elements which are clearly describe their meaning in a human and machine readable way. It is the purpose of elements and attribute and the logical relationship between element and the attributes of those elements. Its means the HTML more comprehensible by better defines the different section and layout of web pages.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;