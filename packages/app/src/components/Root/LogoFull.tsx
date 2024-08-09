import React from 'react';

import MyCustomLogoFull from './logo/logo.png';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  img: {
    width: 75,
    height: 75,
  }
});

const LogoFull = () => {
  const classes = useStyles();
  return <img src={MyCustomLogoFull}  className={classes.img} alt="Logo"/>;
};

export default LogoFull;