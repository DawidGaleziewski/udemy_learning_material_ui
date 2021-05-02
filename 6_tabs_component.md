Selected tab is determined by value prop:

```javascript
<Tabs onChange={handleChange} value={value} className={classes.tabContainer}>
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="Services" />
                  <Tab className={classes.tab} label="The Revolution" />
                  <Tab className={classes.tab} label="About Us" />
                  <Tab className={classes.tab} label="Contact Us" />
                </Tabs>

```

We can handle on change by using a function, the function will take event and indexValue as its params

```javascript
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value)
  }

```