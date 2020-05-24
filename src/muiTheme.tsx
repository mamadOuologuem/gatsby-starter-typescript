import { createMuiTheme, Theme } from '@material-ui/core/styles';

const oxfordBlue = '#0A122A';
const maximumGreen = '#698F3F';
const babyPowder = '#FBFAF8';
const tuscanRed = '#804E49';

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: maximumGreen,
    },
    secondary: {
      main: oxfordBlue,
    },
    text: {
      primary: babyPowder,
      secondary: tuscanRed,
    },
  },
  overrides: {
    MuiTypography: {
      body1: {
        color: babyPowder,
        fontSize: 13,
        fontWeight: 300,
      },
      body2: {
        fontSize: 11,
        letterSpacing: 3.5,
        color: babyPowder,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
      },
    },
  },
});

export default theme;
