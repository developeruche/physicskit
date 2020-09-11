import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './lecture.css'
import Quiz from './Quiz'
import Card from './Card'
import Ad1 from './img/ad.png'
import Chapter1 from './chapters/Chapter1'
import Chapter2 from './chapters/Chapter2'
import Chapter3 from './chapters/Chapter3'
import Chapter4 from './chapters/Chapter4'
import Chapter5 from './chapters/Chapter5'
import Chapter6 from './chapters/Chapter6'
import Chapter7 from './chapters/Chapter7'
import Chapter8 from './chapters/Chapter8'
import Chapter9 from './chapters/Chapter9'
import Chapter10 from './chapters/Chapter10'
import Chapter11 from './chapters/Chapter11'
import Chapter12 from './chapters/Chapter12'
import Chapter13 from './chapters/Chapter13'
import Chapter14 from './chapters/Chapter14'
import Chapter15 from './chapters/Chapter15'

class Lecture extends Component {
    state = {
        chapterIndex: 0,
        chapters: [Chapter1, Chapter2, Chapter3, Chapter4, Chapter5, Chapter6, Chapter7, Chapter8, Chapter9, Chapter10, Chapter11, Chapter12, Chapter13, Chapter14, Chapter15],
        currentSlideIndex: 1,
        currentExcersiceSlideIndex: 1,
        chapterInfo: {
            quizStarted: false
        }
    }

    deployChaphter = (x) => {
        this.setState({
            chapterIndex: x
        })

    }
    instrustion = () => {
        alert('Click or Double click the double forward arrows and a menu would pop out in which you can navigate through chapters')
    }



    /**Functions for handling slides  */
    getChapterSlide = (a) => {
        return (
            this.state.chapters[this.state.chapterIndex].chapterSlide[a - 1]
        )
    };

    /** Function for handling previous chapter slide*/

    handlePreSlide = () => {
        if (this.state.currentSlideIndex <= 1) {

        } else {
            this.setState({
                currentSlideIndex: this.state.currentSlideIndex - 1
            })
            this.getChapterSlide(this.state.currentSlideIndex)
        }
    }

    /** Function for handling next chapter slide */
    handleNextSlide = () => {
        if (this.state.currentSlideIndex >= this.state.chapters[this.state.chapterIndex].chapterSlide.length) {

        } else {
            this.setState({
                currentSlideIndex: this.state.currentSlideIndex + 1
            })
            this.getChapterSlide(this.state.currentSlideIndex)
        }
    }


    /**Functions for handling slides  */
    getExcersiceSlide = (b) => {
        return (
            this.state.chapters[this.state.chapterIndex].excersiceSlide[b - 1]
        )
    };

    /** Function for handling previous chapter slide*/

    handlePreExcersiceSlide = () => {
        if (this.state.currentExcersiceSlideIndex <= 1) {

        } else {
            this.setState({
                currentExcersiceSlideIndex: this.state.currentExcersiceSlideIndex - 1
            })
            this.getExcersiceSlide(this.state.currentExcersiceSlideIndex)
        }
    }

    /** Function for handling next chapter slide */
    handleNextExcersiceSlide = () => {
        if (this.state.currentExcersiceSlideIndex >= this.state.chapters[this.state.chapterIndex].excersiceSlide.length) {

        } else {
            this.setState({
                currentExcersiceSlideIndex: this.state.currentExcersiceSlideIndex + 1
            })
            this.getExcersiceSlide(this.state.currentExcersiceSlideIndex)
        }
    }




    loadFisrtQuiz = () => {
        this.setState({
            quizStarted: true
        })
        document.getElementById('quiz-body').classList.remove('hide')
    }

    animateNaviagtor = () => {
        const controller = document.querySelector('.controller')
        const navigator = document.querySelector('.navigator')
        controller.addEventListener('click', () => {
            controller.classList.toggle('animateController')
            navigator.classList.toggle('nav-active')
        }
        )
    }
    componentDidMount() {
        this.instrustion()
    }
    render() {
        return (

            <>
                <div className='full-container'>
                    <span className='first-control' onClick={this.animateNaviagtor}>
                        <i className="fas fa-angle-double-right controller"></i>

                    </span>
                    <nav className='navigator'>

                        <ul className='ull'>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(0) }}>Chapter 1</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(1) }}>Chapter 2</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(2) }}>Chapter 3</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(3) }}>Chapter 4</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(4) }}>Chapter 5</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(5) }}>Chapter 6</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(6) }}>Chapter 7</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(7) }}>Chapter 8</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(8) }}>Chapter 9</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(9) }}>Chapter 10</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(10) }}>Chapter 11</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(11) }}>Chapter 12</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(12) }}>Chapter 13</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(13) }}>Chapter 14</button></li>
                            <li><button className='chapterbtn' onClick={() => { this.deployChaphter(14) }}>Chapter 15</button></li>

                        </ul>
                    </nav>

                    <div className='struture container'>
                        <div className='mainLecture'>
                            <h1>{this.state.chapters[this.state.chapterIndex].chapterTitle}</h1>
                            <p>{this.state.chapters[this.state.chapterIndex].chapterTopic}</p>
                            <hr />
                            <small>note</small>
                            <p>{this.getChapterSlide(this.state.currentSlideIndex)}</p>
                            <hr />
                            <div className='pagenav'>
                                <span onClick={this.handlePreSlide}>
                                    <i className="fas fa-arrow-circle-left controller"></i>
                                </span>
                                <span onClick={this.handleNextSlide}>
                                    <i className="fas fa-arrow-circle-right controller"></i>
                                </span>
                            </div>
                            <div className='container-fluid text-center'><span>{this.state.currentSlideIndex}</span> of <span>{this.state.chapters[this.state.chapterIndex].chapterSlide.length}</span> slides</div>
                        </div>
                        <br />
                        <div className="adCard">
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                            <Card imgLink={Ad1} discription='Boiling Point Examination Past question'
                                buttonDiscription='Get Now' />
                        </div>
                        <br />
                        <div className='bomb'>
                            <h3>Bomb From Boiling Point</h3>
                            <p>
                                {this.state.chapters[this.state.chapterIndex].bomb}
                            </p>
                        </div>
                        <br /><br />
                        <div className='excersice'>
                            <h1>{this.state.chapters[this.state.chapterIndex].excersiceTitle}</h1>
                            <p>{this.state.chapters[this.state.chapterIndex].excersiceTopic}</p>
                            <hr />
                            <small>note</small>
                            <p>{this.getExcersiceSlide(this.state.currentExcersiceSlideIndex)}</p>
                            <hr />
                            <div className='pagenav'>
                                <span onClick={this.handlePreExcersiceSlide}>
                                    <i className="fas fa-arrow-circle-left controller"></i>
                                </span>
                                <span onClick={this.handleNextExcersiceSlide}>
                                    <i className="fas fa-arrow-circle-right controller"></i>
                                </span>
                            </div>
                            <div className='container-fluid text-center'><span>{this.state.currentExcersiceSlideIndex}</span> of <span>{this.state.chapters[this.state.chapterIndex].excersiceSlide.length}</span> slides</div>
                        </div>
                        <button className='btn btn-success btn-lg' disabled={this.state.chapterInfo.quizStarted} onClick={this.loadFisrtQuiz}>Quiz</button>

                        <div className='hide' id='quiz-body'>
                            <Quiz className='quiz' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Lecture;


