import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "coral"
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

function Stats(props) {

  const classes = useStyles();

  const { covid } = props;

  return (
    <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
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
            </Grid>
           </Grid>
          </Grid>
    </div>
  );
}

export default React.memo(Stats);