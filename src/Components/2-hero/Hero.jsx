import React from "react";
import Lottie from "lottie-react";
import heroanimation from './herodev.json';
import { motion } from "framer-motion";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./hero.css";

const Hero = () => {
    return(
        <section className="hero flex" id="about">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.img initial={{transform: "scale(0)"}} animate={{transform: "scale(1)"}} transition={{damping:6, type:"spring", stiffness: 100}} src="./avatar.jpg" className="avatar" alt="" />
                    <IoIosCheckmarkCircle className="circle-check"/>
                </div>
                <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration:2}} className="title">Front-End Developer (React.js)</motion.h1>
                <p className="subtitle">I'm Ahmed Salah, A Front-End Developer work with various technologies, tools, and languages, HTML, CSS, & JavaScript Use React library with JavaScript Also use Bootstrap library in styling</p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100007682857307&mibextid=ZbWKwL"><FaFacebook className="fa-facebook"/></a>
                    <a href="https://github.com/Ahmedsz1112"><FaGithub className="fa-github"/></a>
                    <a href="https://www.linkedin.com/in/ahmed-salah-5a"><FaLinkedinIn className="fa-linkedin-in"/></a>
                </div>
            </div>
            <div className="rigth-section animation">
            <Lottie  animationData={heroanimation}/>
            </div>
        </section>
    )   
};

export default Hero;