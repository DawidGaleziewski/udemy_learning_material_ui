In material ui some components are created from other components:
https://material-ui.com/api/menu/

in css section we can see rule names.
Menu is created out of two sub componenents: list and paper

This is how we can target those:

```javascript
    <Menu
        // We use classes prop, inside we put object with the rule name we want to override
        // We override the rulle using theme clases
        classes={{paper: classes.menu}}
    >

```