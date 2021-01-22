import './App.css';
import Contact from '../contact/contact';
import React, {useState} from 'react';
import Nav from '../nav/nav';
import Projects from '../projects/projects';
import Welcome from '../welcome/welcome';
import Skills from '../skills/skills';
import Footer from '../footer/footer';
import {makeStyles} from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles({
  root: {
    border: '1px solid #43cead',
    color: '#43cead',
    height: '40px',
    padding: '0 30px',
    // margin: '1%'
  //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  navBtn:{
    margin: '2%',
    cursor: 'pointer',
  }
});

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className = {darkMode ? "dark-mode" : "light-mode"}>
      <div>
        <nav>
          <div className = 'toggle-container'>
            <Brightness4Icon onClick ={()=> setDarkMode(prevMode => !prevMode)} className={classes.navBtn} />
            <Button 
              className={classes.navBtn} 
              variant = 'outlined' 
              href='https://drive.google.com/file/d/1CMatb0Y6tCamMjNyExBTnY_4NCrAlaKO/view?usp=sharing' 
              target='_blank'
              classes={{
                root: classes.root, // class name, e.g. `classes-nesting-root-x`
                label: classes.label, // class name, e.g. `classes-nesting-label-x`
              }}
            >
              Resume
            </Button>
          </div>
        </nav>
      </div>

      <Nav />

      {/* add welcome page */}
      <Welcome />

      {/* add home component */}
      <Skills />

      {/* add projects component */}
      <Projects />

      {/* add about_me component */}
      <Contact/>
      
      {/* add footer component */}
      <Footer />
    </div>
  );
}

export default App;


