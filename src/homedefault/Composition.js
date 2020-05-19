import React from 'react';
import Menu from '@material-ui/core/Menu';

function Composition(props) {
  return (
    <Menu
        id="simple-menu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        {props.children}
      </Menu>
  );
}

export default Composition;