import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem';

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
    height: "8em"
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "50px",
    height: "45px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  }
}))

export default function Header(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0);
  // soring which item on menu was clicked and when we want menu to be rendered
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=> {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 1){
      setValue(1)
    } else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2)
    } else if(window.location.pathname === "/about" && value !== 3){
      setValue(3)
    } else if(window.location.pathname === "/contact" && value !== 3){
      setValue(3)
    }
  }, [value])

  const handleChange = (event, value) => {
    setValue(value)
  }

  const handleClick = (event) => {
    setAnchorElement(event.currentTarget);
    setOpen(true);
  }

  const handleClose = (event) => {
    setAnchorElement(null);
    setOpen(false)
  }

    return (
      <React.Fragment>
        <ElevationScroll>
            <AppBar position='fixed' color="primary">
                {/* Toolbar helps stack content vertically */}
                <Toolbar disableGutters>
                 <Button disableRipple onClick={()=> setValue(0)} className={classes.logoContainer} component={Link} to="/">
                  <img className={classes.logo} alt="company logo" src={logo} />
                 </Button>

                <Tabs onChange={handleChange} value={value} className={classes.tabContainer}
                  indicatorColor="primary"
                >
                  <Tab component={Link}
                  to="/" className={classes.tab} label="Home" />
                  <Tab
                  aria-owns={anchorElement ? "simple-menu" : undefined}
                  aria-haspopup={anchorElement ? "true" : undefined}
                  onMouseOver={event => handleClick(event)}
                  className={classes.tab}
                  component={Link} to="/services" label="Services" />
                  <Tab component={Link} to="/revolution" className={classes.tab} label="The Revolution" />
                  <Tab component={Link} to="/about" className={classes.tab} label="About Us" />
                  <Tab component={Link} to="/contact" className={classes.tab} label="Contact Us" />
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                  Free&nbsp;Estimate
                </Button>
                {/* Menu id must match aria-owns property */}
                <Menu id="simple-menu" anchorEl={anchorElement} open={open} onClose={handleClose}
                  MenuListProps={{onMouseLeave: handleClose}}
                >
                    <MenuItem onClick={handleClose}>
                      Custom Software Development
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Mobile app development
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                     Website development
                    </MenuItem>
                </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}