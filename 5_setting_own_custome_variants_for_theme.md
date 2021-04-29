
Setting own variants is a great way to centralize our styles

```javascript
    typography: {
       tab: {
        fontFamily: "Raileway",
        textTransform: 'none',
        fontWeight: 700,
        fontSize: '1rem',
       }
    }
```

Due to the fact that makeStyles allows us to access the theme object we can now access those styles globally, spread them and use in whole project

```javascript
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
```