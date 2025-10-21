import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                                        <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Salman, and I'm based in Noakhali, Bangladesh. I am currently pursuing a Bachelor's degree in Software Engineering at Noakhali Science and Technology University. My journey in technology began with curiosity and a drive to understand how things work — from logic in code to systems that impact people's lives.<br /><br />
                            Beyond academics, I value creativity, consistency, and social contribution. I actively engage in writing, leadership, and volunteer work, believing that innovation should always serve a greater purpose. My approach to technology blends technical precision with a vision for human-centered solutions.<br /><br />
                            Currently, I am focusing on strengthening my programming foundation, exploring intelligent systems, and working on projects that merge creativity with engineering — from IoT solutions to smart software design.<br /><br />
                            Here are the technologies I've been working with:
                        </p>
                        <ul className="about__list">
                            <li>C / C++</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>HTML / CSS</li>
                            <li>JavaScript</li>
                            <li>IoT Systems</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About