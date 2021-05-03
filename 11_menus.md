Handlers needed for menu

```javascript
// State of the anchor element. Used to anchor the floating menu to it
  const [anchorElement, setAnchorElement] = React.useState(null);
  // Open close state
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    // handles click and sets up the anchor element
    setAnchorElement(event.currentTarget);
    setOpen(true);
  }

  const handleClose = (event) => {
      // Reset anchor element as it is no lonfer needed
    setAnchorElement(null);
    setOpen(false)
  }

```

Setting a anchor element

```javascript
<Tab
    // the aria owns property will be used in id of the Menu component. Otherwise we want it to be not defined
    aria-owns={anchorElement ? "simple-menu" : undefined}
    // Also we want to let know if this element has a popup
    aria-haspopup={anchorElement ? "true" : undefined}
    // on click we will trigger the popup state
    onClick={event => handleClick(event)}
    className={classes.tab}
    component={Link} to="/services" label="Services" 
>
```

Setting up menu

```javascript
    {/* Menu id must match aria-owns property */}
    <Menu id="simple-menu" anchorEl={anchorElement} open={open} onClose={handleClose}>
        {/*We want to close the popup on click*/}
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
```

Handling mouse leave.
We need to target the MenuListi item that is inside Menu component.
This is not as straightforward as one would think and we can do it by special MUI prop

```javascript
                <Menu id="simple-menu" anchorEl={anchorElement} open={open} onClose={handleClose}
                // Pass the close handler here
                  MenuListProps={{onMouseLeave: handleClose}}
                >
```