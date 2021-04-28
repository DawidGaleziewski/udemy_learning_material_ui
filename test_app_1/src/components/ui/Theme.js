import {createMuiTheme} from '@material-ui/core/styles';

//  We centralize ourcolors into the variables
const arcBlue = "#0B72B9";
const arcOrange ="#FFBA60";

const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main:  `${arcBlue}`
        },
        secondary: {
            main:  `${arcOrange}`
        }
    },
    typography: {
        h3:{
            fontWeight: 300
        }
    }
})

export default theme;