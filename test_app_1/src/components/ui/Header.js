import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const {children, window} = props
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    //  This will clone and return a new element of whatever it is that we are wrapping with elevation scroll
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      threshold: 0,
      target: window ? window() : undefined
    });
  }

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "7em"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  }
}))

export default function Header(props) {
  const classes = useStyles()
    return (
      <React.Fragment>
        <ElevationScroll>
            <AppBar position='fixed' color="primary">
                {/* Toolbar helps stack content vertically */}
                <Toolbar disableGutters>
                 <img className={classes.logo} alt="company logo" src={logo} />
                <Tabs className={classes.tabContainer}>
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="Services" />
                  <Tab className={classes.tab} label="The Revolution" />
                  <Tab className={classes.tab} label="About Us" />
                  <Tab className={classes.tab} label="Contact Us" />
                </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}