import { createMuiTheme } from '@material-ui/core/styles';
import { pink, purple } from '@material-ui/core/colors/';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[700],
        },
        secondary: pink,
    },
    whiteText: { color: '#fff' },
});

export default theme;
