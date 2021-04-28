
Material UI theming usess JSS (javascript to css compiler) under the hood

We will need package:
npm i @material-ui/styles --save

We need to wrap our app in ThemeProvider component.

After that we can use createMuiTheme function. This creates a instance of a theme. Any values we pass to it will overwrite the original ones.

## Default Theme
It is usefull to check out what default theme is when we want to modify something

## Palatte
Manage colors in global styles

### palette Object

- colors 

- primary/secondary
many components use those properties so this is a good place to change if we want to quickly see a diffrence in our components

- action
diffrent opacities dpending on action we are trying to perform

## Adding new colors

We can add new color properties to existing mui theme

```javascript
const theme = createMuiTheme({
    palette: {
        common: {
            arcBlue: "#0B72B9",
            arcOrange: "#FFBA60"
        }
    }
})

```

If we want to use variables for our colors we will need to use template literal strings:

```javascript
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
```

Great feature is that MU will automatically generate light and dark varients and apply those to our components

Mui components will have by default color="primary" set on them and we can change those:

```javascript
    <AppBar position='fixed' color="primary">
        {/* Toolbar helps stack content vertically */}
        <Toolbar>
            Arc development
        </Toolbar>
    </AppBar>
```

