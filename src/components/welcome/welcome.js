import React from 'react';
import './welcome.css';
import Button from '@material-ui/core/Button';
import { bounce, fadeInRightBig, fadeIn, fadeInLeftBig } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((themw)=>({
    welcomeBtn:{
        color: '#43cead',
        borderColor: '#43cead',

    }
}))

function Welcome() {
    const classes = useStyles();

    //Array of a few strings that describe what i love about programing
    // const whatILove = ["I love bringing ideas to life", "I love building things for the web.", "I heart JavaScript", "I can cook a little"]

    // const love = document.querySelector("love").innerHTML;
    // love.addEventListener('click', () => {
    //     let loveSentence = Math.floor(Math.random() * whatILove.length);
    //     love.innerHTML = loveSentence;
    // })
    // const welcomeAnimations = {
    //     fadeIn: {
    //         animation: 'x 1s',
    //         animationName: Radium.keyframes(fadeIn, 'fadeIn')
    //     }
    // }
    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        },

        fadeIn: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeIn, 'fadeIn')
        },

        fadeInLeftBig: {
            animations: 'x 1s',
            animationName: Radium.keyframes(fadeInLeftBig, 'fadeInLeftBig')
        },

        fadeInRightBig: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeInRightBig, "fadeInRightBig")
        }
    }

    return (
        <div className="welcome-container">
            <StyleRoot>
                <article style = {styles.fadeInRightBig}>
                    <h4 className="hey">Hi, my name is</h4>
                    <h1 className="my-name">William Jackson III</h1>
                    {/* <h1 className = "and">And</h1> */}
                    <h1 className="love">I love building things for the web.</h1>
                    <p> 
                        I am a self-taught front-end engineer based in Los Angeles, California. My main focus is on UI/UX design and frontend functionality. I have a passion for enhancing the user experience and the user interface. Kindly, proceed on to find my projects. 
                    </p>
                    <div className="welcome-btn">
                       <Button 
                        className={classes.welcomeBtn}
                        variant="outlined" 
                        href="mailto:williamjackson982@gmail.com"
                        type="email-link"
                       >
                           Get in touch
                        </Button>
                    </div>
                </article>
            </StyleRoot>
        </div>
    )
}

export default Welcome;