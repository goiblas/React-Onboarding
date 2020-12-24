import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        button: {
            width: 28,
            height: 36,
            display: "inline-flex",
            border: 0,
            backgroundColor: "transparent",
            '&:focus:not(:focus-visible)': {
                outline: 0
            },
        },
        dot: {
            backgroundColor: props => props.actived ? theme.palette.primary.dark : theme.palette.primary.light,
            height: 8,
            width: 8,
            margin: "auto",
            borderRadius: 9999
        }
    }
))

const Dot = ({ actived, onClick, label }) => {
    const classes = useStyles({actived});
    return <button aria-label={label} className={classes.button} onClick={onClick}><span className={classes.dot}></span></button>
}

export default Dot