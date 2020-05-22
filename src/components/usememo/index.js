import React, { useMemo } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function addTwoNumbers(a,b) {
  return a + b;
}

let useMemoExercises = props => {
  const classes = useStyles();

  const [a, setValueA] = React.useState(0);
  const [b, setValueB] = React.useState(0);

  const submit = (values) => {
    const { a, b } = values;
    setValueA(parseInt(a));
    setValueB(parseInt(b));
  }

  const memoizedValue = useMemo(() => addTwoNumbers(a, b), [a, b]);

  const renderField = ({input, name, id, label, type}) => (
    <TextField
          {...input}
          label={label}
          type={type}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
  );

  const { handleSubmit } = props;

  return (
    <form className={classes.root} onSubmit={handleSubmit(submit)}>
      <div>
        <Button color="primary" type="submit">Suma</Button>
      </div>
      <div>
      <Field name="a" id="a" type="number" label="Number" component={renderField} /> +
      <Field name="b" id="b" type="number" label="Number" component={renderField} />
      <Typography variant="h5" component="h5">
          = {memoizedValue}
      </Typography>
      </div>
    </form>
  );
}

useMemoExercises = reduxForm({
  form: 'usememo'
})(useMemoExercises);

export default useMemoExercises;