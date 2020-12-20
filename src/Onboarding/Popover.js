import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    maxWidth: "94vw",
    width: "420px",
    borderRadius: 12
  },
  popper: {
    zIndex: theme.zIndex.tooltip,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-16px',
      '&::before': {
        borderWidth: '0 24px 24px 24px',
        borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-16px',
      '&::before': {
        borderWidth: '24px 24px 0 24px',
        borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
      }
    }
  },
  arrow: {
    position: 'absolute',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
}));

export default React.forwardRef( ({ anchorEl, children }, ref) => {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
    <>
      <Popper
      ref={ref}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      className={classes.popper}
      placement="bottom-start"
      modifiers={{
        flip: {
          behavior: ['bottom', 'top']
        },
        offset: {
            offset: "0,32",
        },
        preventOverflow: {
          enabled: "true",
          boundariesElement: 'scrollParent'
        },
        arrow: {
          enabled: true,
          element: arrowRef,
        },
      }}
      >
        <div className={classes.paper}>{children}</div>
        <span className={classes.arrow} ref={setArrowRef} /> 
      </Popper>
      </>
  );
})