import React, { Component } from 'react';
import './quiz.css'

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasSubmited: false,
            disable: true,
            quizEnded: false,
            currentQuizIndex: 0,
            quizTitle: 'Chapter One Quiz',
            quizQuestions: [
                {
                    id: 1,
                    question: 'The volume of a given mass of gas is general same with all ideal gases, this is state by who?',
                    options: ['Enstein', 'Avagadro', 'Charles', 'Boyles',],
                    answer: 'Avagadro'
                },
                {
                    id: 2,
                    question: 'What is the name of the scientic who discovered grivitaional force',
                    options: ['Enstein', 'Newton', 'Uche', 'Harwken',],
                    answer: 'Newton'
                },
                {
                    id: 3,
                    question: 'What is the dimension of force8 i am tired of typeing ',
                    options: ['MLT11', 'MLT22', 'MLT333', 'ML4T4'],
                    answer: 'MLT11'
                },
                {
                    id: 4,
                    question: 'Give another name of projectile motion',
                    options: ['Tragetory', 'Translational', 'Rotational', 'Rocket Motion'],
                    answer: 'Tragetory'
                },
                {
                    id: 5,
                    question: 'What is quntum mechincis all about',
                    options: ['Speed above that of light', 'very light particle', 'relativity', 'none'],
                    answer: 'very light particle'
                },
                {
                    id: 6,
                    question: 'What is the name of the first space shutle to first land safely on the moon',
                    options: ['NASA', 'Space X', 'None', 'All'],
                    answer: 'None'
                },
                {
                    id: 7,
                    question: 'What is the numerical value for the moons grivitaional constant if a pendulum clock is 2.5  time faster on the moon',
                    options: ['10', '9.6', '1.6', '4'],
                    answer: '1.6'
                },
                {
                    id: 8,
                    question: 'What is your stand on the saying the time is demensionless',
                    options: ['yes, i agree', 'no it is not', 'Maybe', 'i dont know'],
                    answer: 'yes'
                },
                {
                    id: 9,
                    question: 'What is the number of side owned by a pentagon',
                    options: ['1', '2', '4', '5'],
                    answer: '5'
                }
            ],
            userAnswer: null,
            score: 0
        }
    }
    loadQuiz = () => {
        const { currentQuizIndex } = this.state
        this.setState(() => {
            return {
                question: this.state.quizQuestions[currentQuizIndex].question,
                options: this.state.quizQuestions[currentQuizIndex].options,
                answer: this.state.quizQuestions[currentQuizIndex].answer
            }
        })
        this.setState({
            options: this.state.quizQuestions[currentQuizIndex].options,
            disable: false
        })
    }

    nextQuestionFunc = () => {
        let { userAnswer, answer, score } = this.state

        if (userAnswer === answer) {
            this.setState({
                score: this.state.score + 1
            })
        }

        this.setState({
            currentQuizIndex: this.state.currentQuizIndex + 1,
            userAnswer: null
        })
    }

    componentDidMount() {
        this.loadQuiz()


    }

    checkAnswer = (answer) => {
        this.setState({
            userAnswer: answer,
            disable: false
        })
    }
    endQuiz = () => {
        if (this.state.currentQuizIndex === this.state.quizQuestions.length - 1) {
            this.setState({
                quizEnded: true
            })
        }
    }
    componentDidUpdate(prevProps, prevState) {
        const { currentQuizIndex } = this.state
        if (this.state.currentQuizIndex !== prevState.currentQuizIndex) {
            this.setState(() => {
                return {
                    disable: true,
                    question: this.state.quizQuestions[this.state.currentQuizIndex].question,
                    options: this.state.quizQuestions[this.state.currentQuizIndex].options,
                    answer: this.state.quizQuestions[this.state.currentQuizIndex].answer
                }
            })
        }

    }

    submitbtn = () => {
        this.endQuiz()
        document.getElementById('quiz-container').classList.add('hide')
        document.getElementById('result-container').classList.remove('hide')
        this.setState({
            hasSubmited: true
        })


    }

    change_slide = () => {
        let quizamount = Math.floor(this.state.quizQuestions.length)
        quizamount = quizamount / 2
        if (this.state.currentQuizIndex >= quizamount) {
            document.querySelector('#quiz-container').classList.remove('lg1')
            document.querySelector('#quiz-container').classList.add('lg2')
        }
    }
    Result = () => {
        let quizamount = 8
        quizamount = quizamount / 2
        if (this.state.score > quizamount) {
            return (
                <>
                    <div>
                        <h1 className='result-title'>Wonderful Performance</h1>
                    </div>
                    <div>
                        <p className='result-text'>Your score is {this.state.score} well above Average... Good Jobs</p>
                    </div>
                </>
            );
        }
        if (this.state.score === quizamount) {
            return (
                <>
                    <div>
                        <h1 className='result-title'>Average performance</h1>
                    </div>
                    <div>
                        <p className='result-text'>Your score is {this.state.score} well above Average... You can do better</p>
                    </div>
                </>
            );
        }
        if (this.state.score < quizamount) {
            return (
                <>
                    <div>
                        <h1 className='result-title'>Poor performance</h1>
                    </div>
                    <div>
                        <p>Your score is {this.state.score} below Average... You can do better</p>
                    </div>
                </>
            );
        }

    }
    render() {

        const { question, options, currentQuizIndex, quizEnded, userAnswer } = this.state
        return (
            <>
                <div className='result-container hide' id='result-container'>
                    <this.Result />
                </div>
                <div className='quiz-container lg1' id='quiz-container'>
                    <p className='quiz-question'>{question}</p>


                    <div className='options-container'>
                        {
                            this.state.quizQuestions[this.state.currentQuizIndex].options.map(option =>
                                <button key={option.id} className='options' onClick={() => this.checkAnswer(option)}>
                                    {option}
                                </button>
                            )

                        }
                    </div>
                    <div className='container subans'>
                        <div classame='subnextbtn'>
                            {currentQuizIndex < this.state.quizQuestions.length - 1 &&
                                <button className='answer-btn' disabled={this.state.disable} onClick={this.nextQuestionFunc}>
                                    Next
                        </button>
                            }
                            {currentQuizIndex === this.state.quizQuestions.length - 1 &&
                                <button className='submit-btn' onClick={this.submitbtn} disabled={this.state.disable}>Submit</button>
                            }
                        </div>

                    </div>
                    <div className='track'>
                        <span>Question {currentQuizIndex} / {this.state.quizQuestions.length - 1}</span>
                    </div>
                </div>
                <div className="hide">
                    {this.state.hasSubmited === false ? setInterval(this.change_slide(), 100) : null}
                </div>
            </>
        );
    }
}
export default Quiz;

/**
getQuizTitle = () => {
    return (
        this.state.quizTitle
    )
}

getQuestion = () => {
    if (this.state.quizEnded) {

    } else {
        return (
            this.state.quizQuestions[this.state.currentQuizIndex].question
        )
    }
}


handleNextQuestion = () => {

}
matchAnswer = (answer) => {
    if (!this.state.quizEnded) {

    } else {
        this.setState({
            userAnswer: answer,
            currentQuizIndex: this.state.currentQuizIndex + 1
        })
    }
    if (answer === this.state.quizQuestions[this.state.currentQuizIndex].answer) {
        this.setState({
            score: this.state.score + 1
        })
    }
    if (this.state.currentQuizIndex === this.state.quizQuestions.length - 1) {
        this.setState({
            quizEnded: true
        })
        document.querySelector('.quiz-container').classList.add('hide')
    }

}



render() {

    return (
        <div className='container quiz-container'>
            <div className='quiz-question-and-options'>
                <p className='quiz-question'>{this.getQuestion()}</p>
                <div className='option'>
       {
                        this.state.quizQuestions[this.state.currentQuizIndex].options.map(option =>
                            <button className='optionin' key={option.id}
                                onClick={() => this.matchAnswer(option)}
                            >{option}</button>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
} */