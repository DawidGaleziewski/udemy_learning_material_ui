import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    //  This will clone and return a new element of whatever it is that we are wrapping with elevation scroll
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function Header(props) {
    return (
        <ElevationScroll>
            <AppBar position='fixed'>
                {/* Toolbar helps stack content vertically */}
                <Toolbar>
                    Arc development
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    )
}