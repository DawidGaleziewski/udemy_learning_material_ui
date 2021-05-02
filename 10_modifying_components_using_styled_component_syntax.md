We can deeper customize the components.
https://material-ui.com/components/menus/#popupstate-helper

```javascript
import { withStyles } from '@material-ui/core/styles';


const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
```

Classes used are specific for modyfing those .
We can find more on what to modify in api guide that is on the bottom of the component

https://material-ui.com/api/menu-item/

Due to fact that some mui components are composed of other component api provides css rule names that we can use to modify them

Lasty if we have the override object on theme object that we can use to modify existing styles