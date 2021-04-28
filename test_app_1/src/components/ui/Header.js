import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

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
    ...theme.mixins.toolbar
  }
}))

export default function Header(props) {
  const classes = useStyles()
    return (
      <React.Fragment>
        <ElevationScroll>
            <AppBar position='fixed' color="primary">
                {/* Toolbar helps stack content vertically */}
                <Toolbar>
                  <Typography color="secondary" variant="h3">
                    Arc development
                  </Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}