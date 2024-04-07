import React from 'react'
import '../styles/landing.css'
import Button from '../components/Button/Button';
import logo from '../assets/images/QuizIt.png'
import Animation from '../components/Animation/Animation';

const Landing = () => {

    return (
        <div className="container-fluid landing__container">

            <div className="logo__container">
                <img src={logo} alt="img" className='logo' />
            </div>
            <div className="row">
                <div className="col-md-7 landing__text">
                    <h1 className='subtitle'>Discover Your Knowledge Quotient</h1>
                    <p className='sub_subtitle my-3'>Unleash the quiz enthusiast in you with QuizIt. Engage in captivating quizzes spanning diverse topics and challenge yourself to new heights of knowledge.</p>
                    <p className="sub_subtitle">From brain-teasing puzzles to pop culture trivia, we have quizzes tailored to your interests. Find your favorite category and dive into an exciting world of questions that will keep you on your toes.</p>
                    <Button />
                </div>

                <div className="col-md-5 animation">
                    <Animation />
                </div>
            </div>
        </div>

    )
}

export default Landing
