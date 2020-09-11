import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './cbt.css'
import SwipeableViews from 'react-swipeable-views';
import Warn from "./Submitwarn"
import Constant from './Phycon'
import QoneEight from './questions/QoneEight'
import QoneNine from './questions/QoneNine'
import Qtwo from './questions/Qtwo'
import QtwoOne from './questions/QtwoOne'
import QtwoTwo from './questions/QtwoTwo'
import QtwoThree from './questions/QtwoThree'
import QtwoFour from './questions/QtwoFour'
import QtwoFive from './questions/QtwoFive'
import QtwoSix from './questions/QtwoSix'
import QtwoSeven from './questions/QtwoSeven'
import QtwoEight from './questions/QtwoEight'
import QtwoNine from './questions/QtwoNine'
import QtwoTen from './questions/QtwoTen'
import QtwoEleven from './questions/QtwoEleven'
import QtwoTwelve from './questions/QtwoTwelve'
import QtwoThirteen from './questions/QtwoThirteen'
import QtwoForteen from './questions/QtwoForteen'
import QtwoFifteen from './questions/QtwoFifteen'
import QtwoSixteen from './questions/QtwoSixteen'
import QtwoSeventeen from './questions/QtwoSeventeen'
import QtwoEighteen from './questions/QtwoEighteen'


class CBT extends Component {
    state = {
        score: 0,
        shouldLogin: false,
        isWelcomed: false,
        answeredAll: false,
        hasBegan: false,
        sampleUpdate: 0,
        hour: 0,
        min: 2,
        secs: 3,
        currentCbtIndex: 1,
        maxSteps: 50,
        activeStep: 0,
        titles: [
            'Year 1998 CBT',
            'Year 1999 CBT',
            'Year 2000 CBT',
            'Year 2001 CBT',
            'Year 2002 CBT',
            'Year 2003 CBT',
            'Year 2004 CBT',
            'Year 2005 CBT',
            'Year 2006 CBT',
            'Year 2007 CBT',
            'Year 2008 CBT',
            'Year 2009 CBT',
            'Year 2010 CBT',
            'Year 2011 CBT',
            'Year 2012 CBT',
            'Year 2013 CBT',
            'Year 2014 CBT',
            'Year 2015 CBT',
            'Year 2016 CBT',
            'Year 2017 CBT',
            'Year 2018 CBT',
            'Year 2019 CBT',
        ],
        cbtQuestions: null,
    }
    componentWillMount() {
        this.deployAllYear(3)
    }
    componentDidMount() {
        if (localStorage.getItem("cbt_username") === null) {
            alert('System detects you are not login, Click OK and you would be redirected tot he login page');
            this.setState({
                shouldLogin: true
            })
        } else {

        }

    }
    deployAllYear = (j) => {
        if (j === 1) {
            this.setState({
                cbtQuestions: QoneEight,
                currentCbtIndex: 1
            })
        }
        if (j === 2) {
            this.setState({
                cbtQuestions: QoneNine,
                currentCbtIndex: 2
            })
        }
        if (j === 3) {
            this.setState({
                cbtQuestions: Qtwo,
                currentCbtIndex: 3

            })
        }
        if (j === 4) {
            this.setState({
                cbtQuestions: QtwoOne,
                currentCbtIndex: 4

            })
        }
        if (j === 5) {
            this.setState({
                cbtQuestions: QtwoTwo,
                currentCbtIndex: 5
            })
        }
        if (j === 6) {
            this.setState({
                cbtQuestions: QtwoThree,
                currentCbtIndex: 6
            })
        }
        if (j === 7) {
            this.setState({
                cbtQuestions: QtwoFour,
                currentCbtIndex: 7
            })
        }
        if (j === 8) {
            this.setState({
                cbtQuestions: QtwoFive,
                currentCbtIndex: 8
            })
        }
        if (j === 9) {
            this.setState({
                cbtQuestions: QtwoSix,
                currentCbtIndex: 9
            })
        }
        if (j === 10) {
            this.setState({
                cbtQuestions: QtwoSeven,
                currentCbtIndex: 10
            })
        }
        if (j === 11) {
            this.setState({
                cbtQuestions: QtwoEight,
                currentCbtIndex: 11
            })
        }
        if (j === 12) {
            this.setState({
                cbtQuestions: QtwoNine,
                currentCbtIndex: 12
            })
        }
        if (j === 13) {
            this.setState({
                cbtQuestions: QtwoTen,
                currentCbtIndex: 13
            })
        }
        if (j === 14) {
            this.setState({
                cbtQuestions: QtwoEleven,
                currentCbtIndex: 14
            })
        }
        if (j === 15) {
            this.setState({
                cbtQuestions: QtwoTwelve,
                currentCbtIndex: 15
            })
        }
        if (j === 16) {
            this.setState({
                cbtQuestions: QtwoThirteen,
                currentCbtIndex: 16
            })
        }
        if (j === 17) {
            this.setState({
                cbtQuestions: QtwoForteen,
                currentCbtIndex: 17
            })
        }
        if (j === 18) {
            this.setState({
                cbtQuestions: QtwoFifteen,
                currentCbtIndex: 18
            })
        }
        if (j === 19) {
            this.setState({
                cbtQuestions: QtwoSixteen,
                currentCbtIndex: 19
            })
        }
        if (j === 20) {
            this.setState({
                cbtQuestions: QtwoSeventeen,
                currentCbtIndex: 20
            })
        }
        if (j === 21) {
            this.setState({
                cbtQuestions: QtwoEighteen,
                currentCbtIndex: 21
            })
        }
        console.log('this function was read')
    }
    maindegrading = () => {
        if (this.state.secs > 0) {
            this.setState({
                secs: this.state.secs - 1
            })
        }
        if (this.state.secs === 0 && this.state.min > 0) {
            this.setState({
                min: this.state.min - 1,
            })
            this.setState({
                secs: 59
            })
        }
        if (this.state.secs === 0 && this.state.min === 1 && this.state.hour > 0) {
            this.setState({
                hour: this.state.hour - 1
            })
            this.setState({
                min: 59
            })
        }
        if (this.state.secs === 0 && this.state.min === 0 && this.state.hour > 0) {
            this.setState({
                hour: this.state.hour - 1
            })
            this.setState({
                min: 59
            })
        }
    }
    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    startTest = () => {
        setInterval(() => { this.maindegrading() }, 1000);
        this.setState({
            hasBegan: true
        })
    }
    getCbtTitle = () => {
        return (
            this.state.titles[this.state.currentCbtIndex - 1]
        )
    }
    animatingBurgers = () => {
        document.querySelector('.bug1').classList.toggle('aBug1')
        document.querySelector('.bug2').classList.toggle('aBug2')
        document.querySelector('.bug3').classList.toggle('aBug3')
        document.querySelector('.cbt-navigation').classList.toggle('anavigator')
    }
    refreshPage = () => {
        window.location.reload(false);
    }
    updateandcheck = (quizAnswer, quizNumber, optionsid) => {
        let avilableOptions = document.getElementsByName('avaliableOptions')
        let userAnswer
        for (var i = 0; i < avilableOptions.length; i++) {
            if (avilableOptions[i].checked) {
                userAnswer = avilableOptions[i].value;
            }
        }
        if (optionsid === 1) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ1: userAnswer
                })
            }
        }
        if (optionsid === 1) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ1: userAnswer
                })
            }
        }
        if (optionsid === 2) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ2: userAnswer
                })
            }
        }
        if (optionsid === 3) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ3: userAnswer
                })
            }
        }
        if (optionsid === 4) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ4: userAnswer
                })
            }
        }
        if (optionsid === 5) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ5: userAnswer
                })
            }
        }
        if (optionsid === 6) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ6: userAnswer
                })
            }
        }
        if (optionsid === 7) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ7: userAnswer
                })
            }
        }
        if (optionsid === 8) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ8: userAnswer
                })
            }
        }
        if (optionsid === 9) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ9: userAnswer
                })
            }
        }
        if (optionsid === 10) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ10: userAnswer
                })
            }
        }
        if (optionsid === 11) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ11: userAnswer
                })
            }
        }
        if (optionsid === 12) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ12: userAnswer
                })
            }
        }
        if (optionsid === 13) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ13: userAnswer
                })
            }
        }
        if (optionsid === 14) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ14: userAnswer
                })
            }
        }
        if (optionsid === 15) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ15: userAnswer
                })
            }
        }
        if (optionsid === 16) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ16: userAnswer
                })
            }
        }
        if (optionsid === 17) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ17: userAnswer
                })
            }
        }
        if (optionsid === 18) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ18: userAnswer
                })
            }
        }
        if (optionsid === 19) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ19: userAnswer
                })
            }
        }
        if (optionsid === 20) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ20: userAnswer
                })
            }
        }
        if (optionsid === 21) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ21: userAnswer
                })
            }
        }
        if (optionsid === 22) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ22: userAnswer
                })
            }
        }
        if (optionsid === 23) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ23: userAnswer
                })
            }
        }
        if (optionsid === 24) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ24: userAnswer
                })
            }
        }
        if (optionsid === 25) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ25: userAnswer
                })
            }
        }
        if (optionsid === 26) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ26: userAnswer
                })
            }
        }
        if (optionsid === 27) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ27: userAnswer
                })
            }
        }
        if (optionsid === 28) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ28: userAnswer
                })
            }
        }
        if (optionsid === 29) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ29: userAnswer
                })
            }
        }
        if (optionsid === 30) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ30: userAnswer
                })
            }
        }
        if (optionsid === 31) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ31: userAnswer
                })
            }
        }
        if (optionsid === 32) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ32: userAnswer
                })
            }
        }
        if (optionsid === 33) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ33: userAnswer
                })
            }
        }
        if (optionsid === 34) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ34: userAnswer
                })
            }
        }
        if (optionsid === 35) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ35: userAnswer
                })
            }
        }
        if (optionsid === 36) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ36: userAnswer
                })
            }
        }
        if (optionsid === 37) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ37: userAnswer
                })
            }
        }
        if (optionsid === 38) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ38: userAnswer
                })
            }
        }
        if (optionsid === 39) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ39: userAnswer
                })
            }
        }
        if (optionsid === 40) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ40: userAnswer
                })
            }
        }
        if (optionsid === 41) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ41: userAnswer
                })
            }
        }
        if (optionsid === 42) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ42: userAnswer
                })
            }
        }
        if (optionsid === 43) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ43: userAnswer
                })
            }
        }
        if (optionsid === 44) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ44: userAnswer
                })
            }
        }
        if (optionsid === 45) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ45: userAnswer
                })
            }
        }
        if (optionsid === 46) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ46: userAnswer
                })
            }
        }
        if (optionsid === 47) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ47: userAnswer
                })
            }
        }
        if (optionsid === 48) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ48: userAnswer
                })
            }
        }
        if (optionsid === 49) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ49: userAnswer
                })
            }
        }
        if (optionsid === 50) {
            if (userAnswer === quizAnswer) {
                this.setState({
                    ansQ50: userAnswer
                })
            }
        }
    }
    gettingScore = () => {
        let allUsersAnswer = [
            this.state.ansQ1,
            this.state.ansQ2,
            this.state.ansQ3,
            this.state.ansQ4,
            this.state.ansQ5,
            this.state.ansQ6,
            this.state.ansQ7,
            this.state.ansQ8,
            this.state.ansQ9,
            this.state.ansQ10,
            this.state.ansQ11,
            this.state.ansQ12,
            this.state.ansQ13,
            this.state.ansQ14,
            this.state.ansQ15,
            this.state.ansQ16,
            this.state.ansQ17,
            this.state.ansQ18,
            this.state.ansQ19,
            this.state.ansQ20,
            this.state.ansQ21,
            this.state.ansQ22,
            this.state.ansQ23,
            this.state.ansQ24,
            this.state.ansQ25,
            this.state.ansQ26,
            this.state.ansQ27,
            this.state.ansQ28,
            this.state.ansQ29,
            this.state.ansQ30,
            this.state.ansQ31,
            this.state.ansQ32,
            this.state.ansQ33,
            this.state.ansQ34,
            this.state.ansQ35,
            this.state.ansQ36,
            this.state.ansQ37,
            this.state.ansQ38,
            this.state.ansQ39,
            this.state.ansQ40,
            this.state.ansQ41,
            this.state.ansQ42,
            this.state.ansQ43,
            this.state.ansQ44,
            this.state.ansQ45,
            this.state.ansQ46,
            this.state.ansQ47,
            this.state.ansQ48,
            this.state.ansQ49,
            this.state.ansQ50,
        ]
        let allCbtAns = []
        let funcScore = 0
        this.state.cbtQuestions.map(singleQuestion => allCbtAns.push(singleQuestion.answer))
        for (let x = 0; x < allUsersAnswer.length; x++) {
            if (allUsersAnswer[x] === allCbtAns[x]) {
                funcScore++
            }
            console.log(allUsersAnswer[x])
            console.log(allCbtAns[x])
        }
        console.log(funcScore)
        this.setState({
            score: funcScore
        })
        localStorage.setItem('cbt_score', funcScore)
    }
    handleSubmit = () => {
        document.querySelector('.warningOnSubmit').classList.remove('hide')
        this.gettingScore()
        localStorage.setItem('cbt_lenght', this.state.cbtQuestions.length)
    }
    handleBackWarning = () => {
        document.querySelector('.warningOnSubmit').classList.add('hide')
    }
    exit = () => {
        document.querySelector('.constant-con').classList.add('hide')
    }
    constants = () => {
        document.querySelector('.constant-con').classList.remove('hide')
    }
    render() {
        return (
            <>
                <div className="constant-con hide">
                    <button className='exit' onClick={this.exit}>X</button>
                    <Constant />
                </div>
                {this.state.shouldLogin && <Redirect to="/cbtwelcome" />}
                <div className='allContent'>
                    <div className='main-title'>
                        <div className='cbt-burger' onClick={this.animatingBurgers}>
                            <div className="bug1"></div>
                            <div className="bug2"></div>
                            <div className="bug3"></div>
                        </div>
                        <h1 className='headingTitle'>{this.getCbtTitle()}</h1>
                    </div>
                    <div className='tools-section'>
                        <div className='adwid'>
                            <button className='start-button tol-div' disabled={this.state.hasBegan} onClick={this.startTest}>Start</button>
                        </div>
                        <div className='adwid'>
                            <p className='timer tol-div'>{this.state.hour < 10 ? '0' + this.state.hour : this.state.hour} : {this.state.min < 10 ? '0' + this.state.min : this.state.min} : {this.state.secs < 10 ? '0' + this.state.secs : this.state.secs}</p>
                        </div>
                        <div className='adwid'>
                            <button className='cal tol-div'>Calculator</button>
                        </div>
                        <div className='adwid'>
                            <button className='con-table tol-div' onClick={this.constants}>Constant Table</button>
                        </div>
                    </div>
                    <div className="small-tool">
                        <button className="start-div" disabled={this.state.hasBegan} onClick={this.startTest}>
                            <span className='start-one'>
                                {this.state.hasBegan === true ? <i className="fas fa-play"></i> : <i className="re-icon far fa-play-circle"></i>}
                            </span>
                        </button>
                        <div className="time-div">
                            <div className="smallTime"></div><i className="far fa-clock"></i>  <p>{this.state.hour < 10 ? '0' + this.state.hour : this.state.hour} : {this.state.min < 10 ? '0' + this.state.min : this.state.min} : {this.state.secs < 10 ? '0' + this.state.secs : this.state.secs}</p>
                        </div>
                        <div className="cal-div">
                            <i className="fas fa-calculator re-icon"></i>
                        </div>
                        <div className="con-div" onClick={this.constants}>
                            <i className="fab fa-kickstarter-k re-icon"></i>
                        </div>
                    </div>
                    {
                        this.state.hasBegan &&
                        <SwipeableViews
                            axis={this.state.activeStep <= 0 ? 'x-reverse' : 'x'}
                            index={this.state.activeStep}
                            onChangeIndex={this.handleStepChange}
                            enableMouseEvents
                        >
                            {
                                this.state.cbtQuestions.map(singleQuestion =>
                                    <div className="questandoption" key={singleQuestion.id}>
                                        <div className="onlyquestion">
                                            <p className="questionText">
                                                {singleQuestion.id}. {singleQuestion.question}
                                            </p>
                                        </div>
                                        <div className="onlyOptions">
                                            {this.state.hasBegan &&
                                                <form className={'option' + singleQuestion.id} onChange={(e) => this.updateandcheck(e.target.value, singleQuestion.ans, singleQuestion.id)}>
                                                    {
                                                        singleQuestion.options.map(option =>
                                                            <div className='option-div'><input type='radio' value={option} key={option.id} name='avaliableOptions' className='cbt-options' />  {option} <br /></div>
                                                        )}
                                                </form>
                                            }
                                        </div>
                                    </div>
                                )

                            }
                        </SwipeableViews>

                    }
                    <div className={this.state.hasBegan === false ? "hide" : "cbt-navi-con"}>
                        <div className="leftandright">
                            <button className='left-control' onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                                <span><i className="fas fa-angle-left"></i>Previous</span>
                            </button>
                            <div className="progressBar">
                                {
                                    this.state.cbtQuestions.map(singleQuestion =>
                                        <div className={this.state.activeStep + 1 >= singleQuestion.id ? 'progressItem' : 'progressItemX'}>
                                        </div>
                                    )
                                }
                            </div>
                            <button className='left-control' onClick={this.handleNext} disabled={this.state.activeStep === this.state.maxSteps - 1}>
                                <span>Next<i className="fas fa-angle-right"></i></span>
                            </button>


                        </div>
                        <div className="submit-div">
                            <button className={this.state.answeredAll === true ? 'good-submit' : 'bad-submit'} onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                    <div className="warningOnSubmit hide">
                        <Warn propsOnBack={this.handleBackWarning} />
                    </div>
                    <div className='cbt-navigation'>
                        <ul className='all-links'>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(1)}>1998</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(2)}>1999</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(3)}>2000</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(4)}>2001</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(5)}>2002</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(6)}>2003</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(7)}>2004</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(8)}>2005</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(9)}>2006</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(10)}>2007</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(11)}>2008</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(12)}>2009</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(13)}>2010</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(14)}>2011</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(15)}>2012</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(16)}>2013</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(17)}>2014</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(18)}>2015</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(19)}>2016</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(20)}>2017</button></li>
                            <li><button className='cbtbtn' onClick={() => this.deployAllYear(21)}>2018</button></li>

                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default CBT;