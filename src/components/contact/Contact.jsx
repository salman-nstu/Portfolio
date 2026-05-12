import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { RiPhoneLine, RiMailLine, RiMapPinLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            return toast.error("Please complete the form above");
        }

        setLoading(true);

        const data = {
            name,
            email,
            subject,
            message,
        };

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                data,
                process.env.REACT_APP_EMAILJS_PUBLIC_API
            )
            .then(
                (result) => {
                    setLoading(false);
                    toast.success(`Successfully sent email.`);
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    toast.error(error.text);
                }
            );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Don't like forms? Reach out through the channels below. 👋
                    </p>

                    <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <RiPhoneLine size={24} style={{color: '#f97316'}} />
                            <div>
                                <p style={{fontSize: '0.9rem', color: '#a1a1a1'}}>Phone</p>
                                <a href="tel:+8801859357515" style={{color: '#f1f5fe', textDecoration: 'none', fontSize: '1.05rem'}}>+88 01859357515</a>
                            </div>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <RiMailLine size={24} style={{color: '#f97316'}} />
                            <div>
                                <p style={{fontSize: '0.9rem', color: '#a1a1a1'}}>Email</p>
                                <a href="mailto:salman.nstu@gmail.com" style={{color: '#f1f5fe', textDecoration: 'none', fontSize: '1.05rem'}}>salman.nstu@gmail.com</a>
                            </div>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                            <RiMapPinLine size={24} style={{color: '#f97316'}} />
                            <div>
                                <p style={{fontSize: '0.9rem', color: '#a1a1a1'}}>Location</p>
                                <p style={{color: '#f1f5fe', fontSize: '1.05rem'}}>Noakhali, Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '30px', display: 'flex', gap: '20px', fontSize: '1.5rem'}}>
                        <a href="https://github.com/salman-nstu" target="_blank" rel="noreferrer" style={{color: '#f1f5fe', textDecoration: 'none', transition: 'color 0.3s'}}>
                            <RiGithubLine size={28} style={{hover: {color: '#f97316'}}} />
                        </a>
                        <a href="https://linkedin.com/in/mrsksalman" target="_blank" rel="noreferrer" style={{color: '#f1f5fe', textDecoration: 'none'}}>
                            <RiLinkedinBoxLine size={28} />
                        </a>
                    </div>
                </div>

                <form onSubmit={submitHandler} className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input
                                type="text"
                                className="contact__form-input"
                                placeholder="Insert your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="contact__form-div">
                            <input
                                type="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input
                            type="text"
                            className="contact__form-input"
                            placeholder="Insert your subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                <ToastContainer position="bottom-right" theme={props.theme} />
            </div>
        </section>
    );
};

export default Contact;
