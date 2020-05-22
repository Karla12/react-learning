import React from 'react';
import useBodyScroll from './useBodyScroll';
import Typography from '@material-ui/core/Typography';

function Scroll() {
  const scrollPosition = useBodyScroll();
  const wrapperStyles = {
    height: '5000px',
  };
  const displayStyles = {
    position: 'fixed',
    width: '100%',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
    textAlign: 'center',
  }
  return (
    <div style={wrapperStyles}>
      <div style={displayStyles}>
        <Typography variant="h1" component="h2">
          {scrollPosition !== null ? scrollPosition : 0}
        </Typography>
      </div>
    </div>
  )
}

export default Scroll;