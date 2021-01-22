import React, {useEffect} from 'react';
import './contact.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {makeStyles} from '@material-ui/core/styles';



const homeButtonStyles = makeStyles({
    hBtn: {
        border: '1px solid #43cead',
        color: '#43cead',
        height: '40px',
        padding: '0 30px',
    }
});




function Contact() {

    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    const homeBtn = homeButtonStyles();


    return (
        <div  /*data-aos = "fade"*/ className="home-wrapper">
            <header className="header-container">
                <h1>WIll Jackson III</h1>
                <h3>Frontend Developer, UI/UX Design</h3>
            </header>

            <artcle className="social-links-container">
                <div className="social-links">
                    <a href="https://github.com/Thatguywill12" target="_blank"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/willjacksoniii/" target="_blank"><LinkedInIcon/></a>
                </div>
            </artcle>

            <article className="contact-res-container">
                <div className="contact-res">
                    <p>williamjackson982@gmail.com</p>
                    <p>Los Angeles, CA</p>
                    <Button 
                        variant="outlined" 
                        href='https://drive.google.com/file/d/1CMatb0Y6tCamMjNyExBTnY_4NCrAlaKO/view?usp=sharing' 
                        target='_blank'
                        className = {homeBtn.hBtn}
                    >
                        Resume
                    </Button>
                        
                </div>
            </article>
        </div>        
    )
}

export default Contact