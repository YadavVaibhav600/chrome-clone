import React from "react";
// import gsap from "gsap";  
// import { useEffect } from "react";
import { MdFileDownload } from "react-icons/md";


function HeroSection(){

    

    return(
        <section className = "hero">
        <img className = "chr-non-chrome-hero__logo" src="/chrome-logo.svg" alt="image not found" />
        <h1 className = "hero-title"><span className = "browser-heading">The browser</span><br/>
        built to be yours</h1>
        <button className = "hero-cta hero-cta-text" style = {{display : 'flex' , flexDirection : 'row',gap : '10px' , justifyContent : 'center' }}>
            <MdFileDownload size={24} />
            Download Chrome
            </button>
        <p className="hero-meta">For Windows 11/10 64-bit</p>
        <p style = {{color : '#185abc'}}>I want to update chrome</p>
        <p className = "chrome-terms-of-service">By downloading Chrome, you agree to the <a href = "https://policies.google.com/terms" target = "_blank" rel="noreferrer noopener"
        >Google Terms of Service</a> and  <br/>
        <span style= {{display : 'flex',flexDirection : 'row' , justifyContent : 'center'}}><a href= "https://www.google.com/intl/en_in/chrome/terms/" target = "_blank" rel = "noreferrer noopener">Chrome and ChromeOS Additional Terms of Service</a></span></p>



        
        </section>

        
    );
}


export default HeroSection; 