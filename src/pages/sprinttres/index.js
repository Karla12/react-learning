import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MemoryIcon from '@material-ui/icons/Memory';
import Grid from '@material-ui/core/Grid';
import SingleLineGridList from '../../components/gridlist';
import Scroll from '../../components/customhook';
import UseMemoExercises from '../../components/usememo';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
 root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  }
}));

function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={12}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Scroll" icon={<VideoLabelIcon />} {...a11yProps(0)} />
          <Tab label="Favorites" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab label="useMemo" icon={<MemoryIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Scroll />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SingleLineGridList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UseMemoExercises />
      </TabPanel>
      </Grid>
      </Grid>
      </Grid>
    </div>
  );
}

export default ScrollableTabsButtonForce;