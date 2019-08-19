import React from 'react';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import CounterContainer from './CounterContainer';

const CounterButton = withStyles({
  root: {
    margin: '16px 8px',
    backgroundColor: 'yellow',
  },
})(Button);

const StyledBox = withStyles({
  root: {
    height: 30,
    backgroundColor: '#4ABB4F',
    padding: '8px'
  },
})(Box);

const CounterMui = () => (
  <Container>
    <CounterContainer render={({count, increment, decrement}) => (
      <>
        <Container maxWidth={'sm'}>
          <StyledBox style={{width: `${count}px`}}>{count}</StyledBox>
        </Container>
        <CounterButton variant="contained" onClick={() => decrement()}>
          <RemoveIcon/>
        </CounterButton>
        <CounterButton variant="contained" onClick={() => increment()}>
          <AddIcon/>
        </CounterButton>
      </>
    )}/>

  </Container>
);

export default CounterMui;
