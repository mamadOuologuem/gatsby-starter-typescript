import React from 'react';
import {
  Typography,
  Container,
  withStyles,
  WithStyles,
  createStyles,
} from '@material-ui/core';

import tree from '../../../assets/tree.svg';

function Map({ classes }: MapProps) {
  return (
    <div className={classes.root}>
      <Container fixed>
        <Typography variant="h1">Gatsby typescript starter</Typography>
      </Container>
    </div>
  );
}

const styles = () =>
  createStyles({
    root: {
      backgroundImage: `url(${tree})`,
      backgroundSize: 400,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
      width: '100vw',
      height: 'calc(100vh - 48px)',
    },
  });

export interface MapProps extends WithStyles<typeof styles> {}

export default withStyles(styles)(Map);
