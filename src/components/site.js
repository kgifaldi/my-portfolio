import React, { Component } from 'react'
import { send } from 'emailjs-com'
import { useState } from 'react';

export default class Site extends Component {
    
    render() {
        const toSend = {
            from_name: '',
            to_name: '',
            message: '',
            reply_to: '',
            subject: '',
            from_email: ''
        }

        const handleChange = (e) => {
            console.log("gifaldi e: ", e);
            toSend[e.target.name] = e.target.value;
        };
        const onSubmit = (e) => {
            e.preventDefault();
            send(
                'service_r73hfh4',
                'template_7lt1uzk',
                toSend,
                '61dTb4Bl8RobjM1YE'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });
        };
        return (
            <div>
           
                <div className="site-wrap">
                    <div className="site-mobile-menu site-navbar-target">
                        <div className="site-mobile-menu-header">
                            <div className="site-mobile-menu-close mt-3">
                                <span className="icon-close2 js-menu-toggle" />
                            </div>
                        </div>
                        <div className="site-mobile-menu-body" />
                    </div>
                    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner" style={{ height: '75px' }}>
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-8">
                                    <nav className="site-navigation position-relative text-right" role="navigation">
                                        <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                            <li><a href="#home-section" className="nav-link">Home</a></li>
                                            <li><a href="#about-section" className="nav-link">About</a></li>
                                            <li><a href="#projects-section" className="nav-link">Projects</a></li>
                                            <li><a href="#skills-section" className="nav-link">Skills</a></li>
                                            <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                        </ul>
                                    </nav>
                                    <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="site-blocks-cover overlay bg-light" style={{ backgroundImage: 'url("images/hero_bg_1.jpg")' }} id="home-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center align-self-center text-intro">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <h1 className="text-white" data-aos="fade-up" data-aos-delay>Kyle Gifaldi</h1> <img src="images/kyle.jfif" class="kyle-image"></img>
                                            <p className="lead text-white" data-aos="fade-up" data-aos-delay={100}>Personal website</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-section" id="about-section">
                        <div className="container">
                            <div className="row ">
                                <div className="col-12 mb-4 position-relative">
                                    <h2 className="section-title">About Us</h2>
                                </div>
                                <div className="col-lg-4">
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                                </div>
                                <div className="col-lg-4">
                                    <img src="images/about.jpg" alt="Image" className="img-fluid" />
                                </div>
                                <div className="col-lg-4">
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="site-section block__62272" id="projects-section">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-12 position-relative">
                                    <h2 className="section-title text-center mb-5">Projects</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center mb-5" data-aos="fade">
                                <div id="filters" className="filters text-center button-group col-md-7">
                                    <button className="btn btn-primary active" data-filter="*">All</button>
                                    <button className="btn btn-primary" data-filter=".web">Web</button>
                                    <button className="btn btn-primary" data-filter=".android">Android</button>
                                    <button className="btn btn-primary" data-filter=".misc">Misc</button>
                                </div>
                            </div>
                            <div id="posts" className="row no-gutter">
                                <div className="item android col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/marioGame.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/marioGame.mp4">
                                        </video></a>
                                </div>
                                
                                <div className="item misc col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/maze.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/maze.mp4">
                                        </video></a>
                                </div>
                                <div className="item misc col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/maya.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/maya.mp4">
                                        </video></a>
                                </div>
                                <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/josephacademy.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/josephacademy.mp4">
                                        </video></a>
                                </div>
                                <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/froogle.mp4" className="item-wrap fancybox">
                                       <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/froogle.mp4">
                                        </video></a>
                                </div>

                                <div className="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/memorizer.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/memorizer.mp4">
                                        </video></a>
                                </div>
                                <div className="item android col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <a href="images/task_star.mp4" className="item-wrap fancybox">
                                        <span className="icon-search2" />
                                        <video loop autoPlay className="img-fluid" src="images/task_star.mp4">
                                        </video></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="skills-section" className="site-section section scrollspy">
                        <div className="row mb-5">
                            <div className="col-12 position-relative">
                                <h2 className="section-title text-center mb-5">Skills</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light">Languages</h4>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/java.png" className="responsive-img" />Java
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/cpp.png" className="responsive-img" />C/C++
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/python.png" className="responsive-img" />Python
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/js.png" className="responsive-img" />JavaScript
                    </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/html5.png" className="responsive-img" />HTML5
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/css3.png" className="responsive-img" />CSS
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/bash.png" className="responsive-img" />Bash
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/matlab.png" className="responsive-img" />MATLAB
                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light">Frameworks</h4>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/angular.png" className="responsive-img" />AngularJS
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/nodejs.png" className="responsive-img" />NodeJS
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/spring.png" className="responsive-img" />Spring
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/django.png" className="responsive-img" />Django
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/flask.png" className="responsive-img" />Flask
                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light">Tools</h4>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/github_dark.png" className="responsive-img" />Git
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/jenkins.png" className="responsive-img" />Jenkins
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/wildfly.png" className="responsive-img" />WildFly
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/nodejs.png" className="responsive-img" />Unix
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/azure.png" className="responsive-img" />Azure
                    </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/docker.png" className="responsive-img" />Docker
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/apache.png" className="responsive-img" />HTTP Server + JMeter
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/grafana.png" className="responsive-img" />Grafana
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/angular.png" className="responsive-img" />Ansible
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/androidstudio.png" className="responsive-img" />Android Studio
                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <h4 className="brown-text light">Databases</h4>
                                    <div className="row text-center">
                                        <div className="col s4 m2">
                                            <img alt="" src="images/oracle.png" className="responsive-img" />SQL
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/mysql.png" className="responsive-img" />MySQL
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/mongodb.png" className="responsive-img" />MongoDB
                    </div>
                                        <div className="col s4 m2">
                                            <img alt="" src="images/toad.png" className="responsive-img" />Toad
                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="site-section" id="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mb-5 position-relative">
                                    <h2 className="section-title text-center mb-5">Contact Form</h2>
                                </div>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-6">
                                    <form onSubmit={onSubmit} className="form">
                                        <div className="row mb-4">
                                       
                                            <div className="form-group col-6">
                                                <input defaultValue={toSend.from_name} name="from_name" onChange={handleChange} type="text" className="form-control" placeholder="Full name" />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="form-group col-12">
                                                <input defaultValue={toSend.from_email} name="from_email" onChange={handleChange} type="email" className="form-control" placeholder="Email address" />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="form-group col-12">
                                                <input defaultValue={toSend.subject} name="subject" onChange={handleChange} type="text" className="form-control" placeholder="Subject of the message" />
                                            </div>
                                        </div>
                                        <div className="row mb-4">
                                            <div className="form-group col-12">
                                                <textarea defaultValue={toSend.message} onChange={handleChange} name="message" id="" cols={30} rows={10} type="text" className="form-control" placeholder="Type your message here.."  />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="submit" className="btn btn-primary" defaultValue="Send Message" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-5">
                                    <h3>Texas</h3>
                                    <ul className="list-unstyled mb-5">
                                        <li className="mb-3">
                                            <strong className="d-block mb-1">Address</strong>
                                            <span>1810 Commerce St, Dallas, Texas, USA</span>
                                        </li>
                                        <li className="mb-3">
                                            <strong className="d-block mb-1">Email</strong>
                                            <span>kylegifaldiportfolio@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="site-section bg-light footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright |
                    All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div> {/* .site-wrap */}
            </div>
        )
    };
};