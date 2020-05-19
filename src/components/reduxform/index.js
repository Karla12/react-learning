import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "coral"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper_dos: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

let ReduxForm = props => {

  const [
    showGrid,
    setShowGrid
  ] = React.useState(false);

  const handleClick = (event) => {
    fetchCovid();
    setShowGrid(event.currentTarget);
  };

  const classes = useStyles();

  const { fetchCovid, covid, handleSubmit, pristine, reset, submitting, sintomas } = props;

  console.log('FORM ', covid);

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <div>
              <Paper className={classes.paper}>
                <h3>COVID-19</h3>
                <Button variant="contained" onClick={handleClick}>
                  Stats
                </Button>
              </Paper>
            </div>
          </Grid>
          {showGrid &&
            <Grid item xs={12} sm={12}>
              <div>
                <Paper className={classes.paper_dos}>
                {covid && Object.keys(covid).length
                  && Object.values(covid).map((value, key) => {
                  if (typeof value === 'object' && key < 3) {

                    let text = '';
                    if (key === 0) {
                      text = 'Confirmed';
                    }

                    if (key === 1) {
                      text = 'Recovered';
                    }

                    if (key === 2) {
                      text = 'Deaths';
                    }
                    return (
                    <Grid container spacing={2}>
                       <Grid item>
                        <ButtonBase className={classes.image}>
                          <img className={classes.img} alt="complex" src="https://i.picsum.photos/id/336/200/300.jpg?blur=2" />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                              {text}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                              {value.value}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              API DETAILS: {value.detail}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      </Grid>
                    );
                  }
                  })
                }
                </Paper>
              </div>
            </Grid>}
        </Grid>
      </div>
      <div className={classes.root}>
       {!showGrid &&
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <Paper className={classes.paper}>
                <InputLabel>¿Otra forma en la que se le conoce al COVID-19?</InputLabel>
                <Field name="name" component="input" type="text" />
              </Paper>
            </div>
            <div>
              <Paper className={classes.paper}>
                <InputLabel>¿Por qué debe de lavarse las manos frecuentemente?</InputLabel>
                <div>
                  <InputLabel>
                    <Field name="porque_lavar_manos" component="input" type="radio" value="virus_vivo" />{' '}
                    Para que el virus viva 🙂
                  </InputLabel>
                  <InputLabel>
                    <Field name="porque_lavar_manos" component="input" type="radio" value="virus_muerto" />{' '}
                    Para que el virus muera 😵
                  </InputLabel>
                </div>
              </Paper>
              <Paper className={classes.paper}>
                <div>
                  <label htmlFor="con_que_lavar_manos">¿Con qué se deben de lavar la manos?</label>
                  <div>
                    <label>
                    <Field
                      name="alcohol"
                      id="alcohol"
                      component="input"
                      type="checkbox"
                      value="alcohol"
                    />
                      Desinfectante a base de alcohol
                    </label>
                    <label>
                    <Field
                      name="cloro"
                      id="cloro"
                      component="input"
                      type="checkbox"
                      value="cloro"
                    />
                      Cloro
                    </label>
                    <label>
                    <Field
                      name="agua_jabon"
                      id="agua_jabon"
                      component="input"
                      type="checkbox"
                      value="agua_jabon"
                    />
                      Agua y jabón
                    </label>
                    <label>
                    <Field
                      name="shampoo"
                      id="shampoo"
                      component="input"
                      type="checkbox"
                      value="shampoo"
                    />
                      Shampoo
                    </label>
                  </div>
                </div>
              </Paper>
              <Paper className={classes.paper}>
                <div>
                  <label>¿Qué distancia debe de mantenerse entre usted y las demás personas?</label>
                  <div>
                    <label>
                      <Field name="distancia" component="input" type="radio" value="un_dos_metro" />{' '}
                      1 - 2 metros
                    </label>
                    <label>
                      <Field name="distancia" component="input" type="radio" value="cinco_metro" />{' '}
                      5 - 10 metros
                    </label>
                    <label>
                      <Field name="distancia" component="input" type="radio" value="medio_metro" />{' '}
                      1/2 metros
                    </label>
                  </div>
                </div>
              </Paper>
              <Paper className={classes.paper}>
                <div>
                  <label htmlFor="con_que_lavar_manos">Las manos tocan muchas superficies que pueden estar contaminadas con el virus.<br/>
                  Seleccione partes del cuerpo que debe de evitar tocarse</label>
                  <div>
                    <label>
                    <Field
                      name="piernas"
                      id="piernas"
                      component="input"
                      type="checkbox"
                      value="piernas"
                    />
                      Piernas
                    </label>
                    <label>
                    <Field
                      name="manos"
                      id="manos"
                      component="input"
                      type="checkbox"
                      value="manos"
                    />
                      Manos
                    </label>
                    <label>
                    <Field
                      name="ojos"
                      id="ojos"
                      component="input"
                      type="checkbox"
                      value="ojos"
                    />
                      Ojos
                    </label>
                    <label>
                    <Field
                      name="nariz"
                      id="nariz"
                      component="input"
                      type="checkbox"
                      value="nariz"
                    />
                      Nariz
                    </label>
                    <label>
                    <Field
                      name="pansa"
                      id="pansa"
                      component="input"
                      type="checkbox"
                      value="estomago"
                    />
                      Estomago
                    </label>
                    <label>
                    <Field
                      name="boca"
                      id="boca"
                      component="input"
                      type="checkbox"
                      value="boca"
                    />
                      Boca
                    </label>
                  </div>
                </div>
              </Paper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>
                <label>
                  Solicite atención médica, 
                   <Field name="sintomas" component="select">
                    <option value="">si siente...</option>
                    {sintomas.map(sintoma => (
                      <option value={sintoma} key={sintoma}>
                        {sintoma}
                      </option>
                    ))}
                  </Field>
                </label>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <label>
                  El frío y la nieve pueden matar al virus<br />
                   <Field name="frio_nieve" component="input" type="checkbox" />{' '}
                    Cierto
                </label>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <label>
                  El virus se transmite a través de las picaduras de mosquitos<br />
                   <Field name="mosquitos" component="input" type="checkbox" />{' '}
                    Cierto
                </label>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <label>
                  Beber alcohol no lo protegerá de la COVID19 y podría ser peligroso<br />
                  <Field name="beber_alcohol" component="input" type="checkbox" />{' '}
                    Cierto
                </label>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div>
                <label>
                  Las redes 5G de telefonía móvil no propagan la COVID-19<br />
                  <Field name="mobil" component="input" type="checkbox" />{' '}
                    Cierto
                </label>
              </div>
            </Paper>
            <Paper>
              <div>
                <Button type="submit" variant="contained" color="primary" disabled={pristine || submitting}>
                  Submit
                </Button>
                {' '}
                <Button type="button" variant="contained" disabled={pristine || submitting} onClick={reset}>
                  Undo Changes
                </Button><br />
              </div>
            </Paper>
          </Grid>
        </Grid>}
      </div>
    </form>
  );
}

ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ReduxForm);

export default ReduxForm;