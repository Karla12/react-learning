import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 600,
    height: 550,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function SingleLineGridList() {

  const [ favorite, setFavorite ] = React.useState([]);

  const handleFavorite = (key) => {
    setFavorite([...favorite, key]);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">useState</ListSubheader>
        </GridListTile>
        {data.map((tile,key) => (
          <GridListTile key={key}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`}
                className={classes.icon} onClick={() => handleFavorite(key)} >
                {favorite.indexOf(key) > -1 
                  ? <FavoriteIcon />
                  : <FavoriteBorderIcon />
                }
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default SingleLineGridList;