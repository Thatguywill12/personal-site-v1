import React, {useEffect} from 'react';
import './projects.css';
import webdesign7 from '../../images/webdesign7.png';
import webdesign9 from '../../images/webdesign9.jpg';
import twitterlogo from '../../images/twitterlogo.png';
import Button from '@material-ui/core/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';









function Projects() {

    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

    return (
        <div className='projects-container'>
            <h2 className = 'projects-header' data-aos = "fade">Projects</h2>
            <div className="projects-wrapper">
                <div data-aos = "flip-right" className="project-1">
                    <div className="project-image">
                        <img src= {twitterlogo} alt = 'project image'/>
                        <div className="image__overlay">
                            <h4>Twitter Clone</h4>
                            <p>
                            In this project I used react to build out all of the twiiter UI Components. I used material ui for all of the icons and designs. I used firebase to deploy and firstore as a database to track tweets made.
                            
                            </p>
                        </div>
                    </div>
                    <Button variant = "outlined">
                        <a href="https://thatguywill12.github.io/twitter-clone/" target="_blank" className="projects-link"> Twitter Clone Link</a>
                    </Button>
                </div>


                    <div data-aos = "flip-right" className="project-2">
                        <div className="project-image">
                            <img src= {webdesign7} alt= 'project image'/>
                            <div className="image__overlay">
                                <h4>IOS Calculater Clone</h4>
                                <p>
                                    In this project i used HTML5, CSS3, and Vanilla Javascript to create a clone of the ios-calculater with simple funtionality. This project dealt with event-listeners, manipulationg the DOM and handling types and coercion. Try it out!
                                </p>
                            </div>
                        </div>
                        <Button variant = "outlined"><a href="https://thatguywill12.github.io/ios-calculator-clone/" target="_blank" className="projects-link"> IOS Calculater</a></Button>
                    </div>


                    <div data-aos = "flip-right" className="project-3">
                        <div className="project-image">
                            <img src= {webdesign9} alt= 'project image'/>
                            <div className="image__overlay">
                                <h4>Eccommerce Store</h4>
                                <p>
                                   This project is under construction.
                                </p>
                            </div>
                        </div>
                        <Button variant = "outlined"><a href="https://thatguywill12.github.io/twitter-clone/" target="_blank" className="projects-link"> In Progress</a></Button>
                    </div>

                    <div data-aos = "flip-right" className="project-4">
                        <div className="project-image">
                            <img src= {webdesign9} alt = 'project image'/>
                            <div className="image__overlay">
                                <h4>In Progress</h4>
                                <p>
                                    This project is under construction.
                                </p>
                            </div>
                        </div>
                        <Button variant = "outlined"><a href="https://thatguywill12.github.io/twitter-clone/" target="_blank" className="projects-link"> In Progress</a></Button>
                    </div>


                    <div data-aos = "flip-right" className="project-5">
                        <div className="project-image">
                            <img src= {webdesign9} alt= 'project image'/>
                            <div className="image__overlay">
                                <h4>In Progress</h4>
                                <p>
                                    This project is under construction.
                                </p>
                            </div>
                        </div>
                        <Button variant = "outlined"><a href="https://thatguywill12.github.io/twitter-clone/" target="_blank" className="projects-link"> In Progress</a></Button>
                    </div>

                    <div data-aos = "flip-right" className="project-6">
                        <div className="project-image">
                            <img src= {webdesign9} alt= 'project image'/>
                            <div className="image__overlay">
                                <h4>In Progress</h4>
                                <p>
                                    This project is under construction.
                                </p>
                            </div>
                        </div>
                        <Button variant = "outlined"><a href="https://thatguywill12.github.io/twitter-clone/" target="_blank" className="projects-link"> In Progress</a></Button>
                    </div>
                </div>
    </div>
    )
}

export default Projects;