import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import HomeDefautl from "../../homedefault";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReduxForm from "../../components/reduxform";
import { fetchCovid } from '../../services/actions';
import ScrollableTabsButtonForce from '../sprinttres';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const optionsMenu = [
  {name:"Sprint I",url:"/homedefault"},
  {name:"Sprint II",url:"/reduxform"},
  {name:"Sprint III",url:"/sprinttres"}
];

const ITEM_HEIGHT = 48;

const sintomas = [
    'Dolores de cabeza',
    'Dolor de garganta',
    'Dolores musculares o corporales',
    'Si tiene escalofríos o fiebre',
    'Si tiene fiebre y tos',
    'Si tiene fiebre, tos y dificultad para respirar'
];

const textInformation = '¿Estás bien informado?';

const correctData = {
    agua_jabon: true,
    alcohol: true,
    beber_alcohol: true,
    boca: true,
    distancia: "un_dos_metro",
    mobil: true,
    name: "corinavirus",
    nariz: true,
    ojos: true,
    porque_lavar_manos: "virus_muerto",
    sintomas: "Si tiene fiebre, tos y dificultad para respirar"
};

function Home(props) {

  const [
    anchorEl,
    setAnchorEl
  ] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = (values) => {
    if (Object.is(values,correctData)) {
      console.log('CORRECTO',values);  
      console.log('CORRECTO',correctData);
    }
    console.log('INCORRECTO',values);
    console.log(correctData);
  };

  const classes = useStyles();

  const {
    actions: {
      fetchCovid
    },
    covid
  } = props;

  return (
    <div className={classes.root}>
      <Router>
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
        {optionsMenu.map((option) => (
          <Link key={option.name} to={option.url} onClick={handleClose}>
            {option.name}<br /><br />
          </Link>
        ))}
      </Menu>
        <Grid item xs={12}>
          <Switch>
            <Route path="/homedefault">
              <h4>Sprint I</h4>
              <HomeDefautl />
            </Route>
            <Route path="/reduxform">
              <h4>Sprint II</h4>
              <ReduxForm
                onSubmit={submit}
                sintomas={sintomas}
                textInformation={textInformation}
                fetchCovid={fetchCovid}
                covid={covid}
              />
            </Route>
            <Route path="/sprinttres">
              <h4> Sprint III</h4>
              <ScrollableTabsButtonForce />
            </Route>
          </Switch>
        </Grid>
        </div>
      </Router>
      {/*styleImage && <div style={sectionStyle}></div>*/}
    </div>
  );
}

const mapDispatchToProps= ( dispatch ) => {
  return {
    actions: bindActionCreators({
      fetchCovid
    }, dispatch)
  }
}

const mapStateToProps = (state) => {
  const {
    reducers:{
      covid: {
        data
      }
    }
  } = state;
  return {
    covid: data
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);