import React from "react"
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

const fullRounded = "9999em"
const duration = 1600;

const useStyles = makeStyles((theme) => ({
        "@keyframes ripple": {
            "0%": {
                boxShadow: "inset 0 0 0 14px #8fc7eb"
            },
            "100%": {
                transform: "scale(3)",
                boxShadow: "inset 0 0 0 0 #8fc7eb"
            }
        },
        wrapper: {
            height: props => props.size,
            width: props => props.size,
            transform: "translate(-50%, -50%)",
            position: 'absolute'
        },
        dot: {
            height: '100%',
            width: '100%',
            backgroundColor: '#3a99d8',
            borderRadius: fullRounded,
            position: 'relative',
            zIndex: 1,
        },
        ripple: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: fullRounded,
            animation: `$ripple ${duration}ms infinite ${duration/2}ms cubic-bezier(0.64, 0.42, 0.54, 1)`,
            '&:last-child': {
                animationDelay: `-${duration}ms`
            },
            '@media (prefers-reduced-motion)': {
                animationPlayState: "paused",
                animationDelay: `-${duration - 200}ms`,

                '&:last-child': {
                    animationDelay: `-${duration/2}ms`,
                }
            }
        }
}))

const Badge = React.forwardRef(({ size = 14 }, ref) => {
    const classes = useStyles({ size })
    return (
        <div ref={ref} className={classes.wrapper}>
            <div className={classes.dot} />
            <div className={classes.ripple} /> 
            <div className={classes.ripple} />
        </div>
    )
})

Badge.propTypes = {
    size: PropTypes.number
}
export default Badge