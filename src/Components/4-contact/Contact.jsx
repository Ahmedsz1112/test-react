import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import Doneanimation from './Done.json';
import contactanimation from './contact-us.json';
import { FaEnvelope } from "react-icons/fa";
import "./contact.css";

const Contact= () => {
    const [state, handleSubmit] = useForm("mldrnlra");
    return(
        <section className="contact-us" id="contact">
            <h1 className="title">
                <FaEnvelope className="fa-envelope"/>
                Contact me
            </h1>
            <p className="subtitle">Contact us for more information and Get notified when I publish something new</p>
            <div style={{justifyContent: "space-between"}} className="flex">
                <form onSubmit={handleSubmit} className="form">
                <div className="flex">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" autoComplete="off" name="email" id="email" required placeholder="Email Address" />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                </div>
                <div className="flex" style={{marginTop: "24px"}}>
                    <label htmlFor="message">Your message:</label>
                    <textarea name="message" required id="message" placeholder="Message"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                </div>
                <button type="submit" disabled={state.submitting} className="submit">{state.submitting ? "Submitting..." : "Submit"}</button>
                {state.succeeded && (<p className="flex done" style={{fontSize: "18px" , marginTop: "1.7rem"}}>
                    <Lottie loop={false} style={{height: 37}} animationData={Doneanimation}/>
                    Your message has been sent sucessfully</p>)}
                </form>

                <div className="animation">
                    <Lottie  animationData={contactanimation}/>
                </div>
            </div>
        </section>
    )
}

export default Contact;