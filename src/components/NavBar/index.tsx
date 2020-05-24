import React from 'react';
import { Link } from 'gatsby';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Theme,
  withStyles,
  WithStyles,
  createStyles,
  Button,
  Box,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faHome } from '@fortawesome/free-solid-svg-icons';

const menuList = [
  {
    title: 'Home page',
    link: '/',
    icon: faInfo,
  },
  {
    title: 'About page',
    link: '/',
    icon: faHome,
  },
];

function NavBar({ classes }: NavBarProps) {
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="dense">
        <Grid container>
          <Grid item xs={3}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Typography
                variant="h6"
                className={classes.logo}
                component={Link}
                to="/"
              >
                Template
              </Typography>
            </Box>
          </Grid>

          <Grid className={classes.menuContainer} item xs={9}>
            {menuList.map(({ title, link, icon }) => (
              <Button key={title} component={Link} to={link}>
                <FontAwesomeIcon icon={icon} className={classes.icon} />
                {title}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      backgroundImage: theme.palette.primary.main,
    },

    logo: {
      letterSpacing: '.3rem',
      fontSize: '1.25rem',
      textTransform: 'uppercase',
      padding: 0,
    },

    menuContainer: {
      textAlign: 'right',
    },

    icon: {
      marginRight: 10,
      fontSize: 10,
    },
  });

export interface NavBarProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(NavBar);
