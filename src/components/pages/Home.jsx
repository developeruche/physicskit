import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import slide1 from "../../slide1.jpg"
import slide2 from "../../slide2.jpg"
import slide3 from "../../slide3.jpg"
import "./home.css"


const Home = () => {
    return (
        <>
            <div id="slides" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} alt="slide1" />
                        <div className="carousel-caption">
                            <h1 className="display-1 textshadow1 font1" id='font1'>UC Dev</h1>
                            <h3 className="textshadow2 font2">Online Physics111 Kit</h3>
                            <p className="textshadow3 font3">With up to date Lectures and chapter Test Question</p>
                            <p className="textshadow3 font3"><i>with extra short-cut and hints for examination.</i></p>
                            <button type="button" className="btn btn-primary btn-lg buttons">Veiw Lecture</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} alt="slide2" />

                        <div className="carousel-caption">
                            <h1 className="display-3 textshadow1 font4">Connect with your fellow students and share ideas together.</h1>
                            <button type="button" className="btn btn-primary btn-lg buttons">Veiw Connect</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} alt="slide3" />
                        <div className="carousel-caption">
                            <h1 className="display-3 textshadow1 font1">Examine yourself</h1>
                            <h3 className="textshadow2 font2">at your comfort with the CBT platform</h3>
                            <button type="button" className="btn btn-primary btn-lg buttons">Veiw CBT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="something container-fluid">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p className="lead para">Unique and Creative Development has also developed Physic 111 kit app
                        with this app you can still study even if you run out of data... <small>UC Dev have you covered</small></p>
                    </div>
                </div>
            </div>
            <div className="social">
                <a target="_blank" href="#"><i className="fab fa-facebook"></i></a>
                <a target="_blank" href="https://twitter.com/uniquedev11"><i className="fab fa-twitter"></i></a>
                <a target="_blank" href="https://www.instagram.com/uc_dev/"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="container pd-3 mt-3">
                <p className="lead para">
                    Welcome to Unique and Creative Development Phy111 kit, These kit is developed to assist 100 level student understand
                    physics 111, pass examination in flying colours also learn at ease and spieced up with fun. This kit is broken down
                    into sections and the sequence which i would advice to be followed is;
        </p>
                <p className="lead para">
                    Firstly, taking the main study is adviseable this would help you cover up missed classes, subtopics or topic that seems
                    confusing and are not understood, help you with some excersice which gives
                    explaination in details of topics and some already asked question is also placed i this section so you can learn for the
                    mistake and questions of your fellow student. Secondly, i would advise after taking the main study and handling some of
                    the excersices you shold try out the past question section this would help you spot out point which you didn't understand to the
                    core, apply already learnt skills in real life examination question boost your confidence and also help you know your
                    efficency in that topic.  Thridly, i would advice you then try out the CBT section, the CBT web appication is built in a
                    pattner synomious to the standard school examination computer based test this would help in show you how the examination
                    realy looks like, show your fuals if there is any for instance poor time manage and you should know that proper time
                    management is your first advatage in examination success.
                    Lastly, i would encourage you to navigate to the connect section thou it is not very neccesary but for personal experience
                    you can prove to yourself that you realy understand a topic not be just take past questions and CBT but when you explain
                    to someone those content stick better make it almost impossible to forget.
        </p>
                <hr />
            </div>
        </>
    );
}

export default Home;