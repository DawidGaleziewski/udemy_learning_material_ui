Styling of text

fontSize is important as it is root font size.
Typography variants (i.e h1,h2 etc). Uses rem. I.e fontSize: "6rem".

This helps with responsivnes

Im mui we yuse Typography component and select its variant (h1, h2, subititle)

```javascript
                  <Typography variant="h1">
                    Arc development
                  </Typography>
```

We can customize any varian in the theme object

```javascript
    typography: {
        h3:{
            fontWeight: 300
        }
    }

```