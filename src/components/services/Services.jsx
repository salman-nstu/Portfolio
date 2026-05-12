import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Full-Stack Web Development",
        description:
            "Building scalable web applications using React, Angular, Node.js, and Spring Boot with modern design patterns and responsive UI/UX",
    },
    {
        id: 2,
        image: Image2,
        title: "Backend & API Development",
        description:
            "Designing REST APIs, implementing business logic, and building robust backend systems using Spring Boot, Node.js, and MongoDB/MySQL",
    },
    {
        id: 3,
        image: Image3,
        title: "IoT & Smart Systems",
        description:
            "Developing IoT-enabled solutions for smart farming, environmental monitoring, and automation using embedded systems and sensor integration",
    },
    {
        id: 4,
        image: Image1,
        title: "Desktop Applications",
        description:
            "Creating interactive desktop applications using Java Swing with algorithms, data structures, and complex system design",
    },
    {
        id: 5,
        image: Image2,
        title: "AI & Machine Learning",
        description:
            "Integrating AI solutions using OpenAI APIs, speech-to-text transcription, and intelligent data processing with Flask and Python",
    },
    {
        id: 6,
        image: Image3,
        title: "Systems & Security",
        description:
            "Building secure systems with encryption, authentication, memory management, and production-quality code with comprehensive testing",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services