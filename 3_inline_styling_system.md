We use inlinse styling when we want to create more unique styles for a component

We start by importing makeStyles method that will help us create a hook.

makeStyles creates styles, and the hook returned helps us access those in the component. Those will be compiled from jss to css

```javascript
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
  
})
```

Important thing is that we can acces our theme in make styles

```javascript
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
}))

// we can use those styles to access the height of the navbar an apply it to a div to create a space
        <div className={classes.toolbarMargin} />
```