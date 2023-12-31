import React from "react";
import "./Hero.css";
import heroImg from '../../assets/images/expBlack.svg'



export default function Hero() {
    return <section className="hero" id="hero">
        <div className="text-container">
        <p class="animate__animated animate__backInDown">Hii!</p>
        <p class="animate__animated animate__backInLeft">I'm Fatema,</p>
        <p class="animate__animated animate__backInUp">FullStack-Web-Developer();</p>
        </div>
        <div className="img-container">
        <img src={heroImg} alt="Code" class="animate__animated animate__backInRight" />
        </div>
    </section>;
}
