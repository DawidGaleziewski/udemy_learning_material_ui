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
       tab: {
        fontFamily: "Raileway",
        textTransform: 'none',
        fontWeight: 700,
        fontSize: '1rem',
       },
       estimate: {
            fontFamily: "Pacifico",
            fontSize: '1rem',
            textTransform: 'none',
            color: 'white'
       }
    }
})

export default theme;