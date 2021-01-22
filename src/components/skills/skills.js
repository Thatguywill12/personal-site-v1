import React, {useEffect} from 'react';
import './skills.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {

    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return (
        <div className = 'skills-wrapper'>
            <article className = "r1c1">
                <h3 data-aos = "fade">BACKGROUND</h3>
                <p data-aos = "fade">
                    I am a selft taught front-end web developer who has a passion for building websites and web applications. I specialize in creating responsive, functional and creative UI/UX experiences. My tool of choice is react but lately I have been finding interest in Swift and the tools that it offers. I enjoy being in a collaberative environments and working with teams to take ideas to the next level. 
                </p>
            </article>

            <article data-aos = "fade" className = "r2c2">

                <h4>SKILLS</h4>
            
                <ul>
                    <h5><span>LANGUAGES</span></h5>
                    <li>JavaScript(ES6)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>

                <ul>
                    <h5><span>FRAMEWORKS</span></h5>
                    <li>React</li>
                    <li>Flask</li>
                    <li>Node</li>

                    
                </ul>

                <ul>
                    <h5><span>TOOLS</span></h5>
                    <li>Git & Github</li>
                    <li>Bash</li>
                    <li>Postman</li>
                    <li>MongoDB</li>
                    <li>Chrom DevTools</li>
                </ul>

                <ul>
                    <h5><span>DESIGN</span></h5>
                    <li>Figma</li>
                    <li>Wireframing</li>
                </ul>
            </article>
            
        </div>
    )
}

export default Skills;