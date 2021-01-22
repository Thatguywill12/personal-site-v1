import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import './nav.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
        >
          <Fab>
            <KeyboardArrowUpIcon />          
          </Fab>
        </ScrollUpButton>
      </div>
    );
  }
}