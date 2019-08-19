import React from 'react';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CounterContainer from "./CounterContainer";

const CounterButton = withStyles({
  root: {
    margin: '16px 8px',
  },
})(Button);

const CounterMui = () => (
  <Container>
    <h3>MUI Counter</h3>
    <CounterContainer render={({count, increment, decrement}) => (
      <>
        <Container>
          <Fab color={'secondary'}>
            <Typography variant={'h5'}>{count}</Typography>
          </Fab>
        </Container>
        <CounterButton variant='contained' onClick={() => decrement()}>
          <RemoveIcon/>
        </CounterButton>
        <CounterButton variant='contained' onClick={() => increment()}>
          <AddIcon/>
        </CounterButton>
      </>
    )}/>

  </Container>
);

export default CounterMui;
