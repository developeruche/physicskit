import React, { Component } from 'react';
import './cbtwelcome.css';
import { Redirect } from "react-router-dom";
import authorImage from './img/author.jpg'
import Typing from 'react-typing-animation';
class Welcome extends Component {
    state = {
        disableReplyBtn: false,
        shouldRenderLast: false,
        replyNameRenderFormat: '',
        userName: '',
        authourDone: false,
        shouldProgress: false
    }
    setAuthorDone = () => {
        this.setState({
            authourDone: true
        })
    }

    replySend = () => {
        let toRenderOld = document.getElementById('userReply').value
        let toRender = `my name is ${toRenderOld}`
        this.setState({
            replyNameRenderFormat: toRender
        })
        this.setState({
            userName: toRenderOld
        })
        this.setState({
            shouldRenderLast: true
        })
        this.setState({
            disableReplyBtn: true
        })
        localStorage.setItem("cbt_username", toRenderOld);
        setTimeout(() => { this.goToTest() }, 20000);
    }
    goToTest = () => {
        this.setState({
            shouldProgress: true
        })
    }
    render() {
        return (
            <>
                <div className={this.state.authourDone === false ? 'fullAuthorSpeech' : 'hide'}>
                    <div className="authourWelcome">
                        <div className="authorImageCon">
                            <div className="authorImage">
                                <img className='authorImg' src={authorImage} alt={"display of author"} />

                            </div>
                        </div>
                        <Typing speed={50} className='p5 typing'>
                            <h1> Hello!!! I am Uche from UC Dev...</h1>
                            <p className='authour-s-text'> Thank you for trying out this application, hope you would enjoy it</p>
                            <p className='authour-s-text'> Our Artificial intelligence robot UC Bot would guide you through</p>
                            <p className='authour-s-text'> the nesscities to start the test click <b>Enable AI</b> to get started.</p>
                        </Typing>

                    </div>
                    <button className='enableai' onClick={this.setAuthorDone}>Enable AI</button>
                </div>
                <div className={this.state.authourDone === true ? 'fullContainer' : 'hide'}>
                    <div className="chatContainer">
                        <div className="chatOne computerChat">
                            <p>
                                Hello, I an UC Bot, i would be showing you around and give you useful instructions
                            </p>
                        </div>
                        <div className="chatTwo computerChat">
                            <p>
                                But before we commense i would love to know your name
                            </p>
                            <i><small>just type in the letters of your name whatever you input would be what I would address you with</small></i>

                        </div>
                        <div className="chatThree userChat">
                            <p>
                                {this.state.replyNameRenderFormat}
                            </p>
                        </div>
                        {this.state.shouldRenderLast &&
                            <div className="renderLast">
                                <div className="chatFour computerChat">
                                    <p>
                                        nice to met you {this.state.userName}
                                    </p>
                                </div>
                                <div className="chatFive computerChat">
                                    <p>
                                        this test would begin in 20sec you have just 2 hours to answer all questions, calculator and physics constant table
                                        are aready provided for you... Good Luck
                            </p>
                                </div>
                                <div className="chatSix computerChat">
                                    <p>
                                        After the test i would prepare your result
                            </p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="replyContainer">
                        <textarea type='text' id='userReply' className='text-input' name='userReply' placeholder='reply' />
                        <button className="sendplane" onClick={this.replySend} disabled={this.state.disableReplyBtn}>
                            <i className="fab fa-telegram" ></i>
                        </button>
                    </div>
                    {this.state.shouldProgress && <Redirect to="/cbt" />}
                </div>
            </>
        );
    }
}

export default Welcome;