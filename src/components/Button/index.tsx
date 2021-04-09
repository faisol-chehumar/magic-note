import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

type Props = {
  text: string
}

const Button = ({ 
  text = 'Default' }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiButton variant="contained">{text}</MuiButton>
    </div>
  );
};

export default Button;

