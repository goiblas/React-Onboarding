import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from "react"
import PropTypes from 'prop-types'
import FocusLock, { MoveFocusInside } from 'react-focus-lock'
import { Backdrop, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { enableScroll, disableScroll } from "./scrollLock"
import Portal from "./Portal"
import Badge from "./Badge"
import { getCoords } from "./utilsDom"
import Popover from "./Popover"
import Dot from "./Dot"

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.modal + 1,
    },
    navigation: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

const createAnchorEl = ({ x, y }) => ({
    clientWidth: 0,
    clientHeight: 0,
    getBoundingClientRect() {
        return {
            left: x,
            right: x,
            top: y,
            bottom: y
        }
    }                      
})

const Onboarding = ({ open, steps, onCompleted, next: nextText, previus: previusText, finish: finishText  }) => {
    const classes = useStyles();
    const [current, _setCurrent] = useState(0)
    const [position, setPosition] = useState(null)
    const [isMoving, setMoving] = useState(false)
    const popperRef = useRef()

    const isCompleted = (arr, position) => !arr[position];

    const setCurrent = useCallback( newPosition => _setCurrent( lastPosition => {
        const step = steps[lastPosition]
        if(step.onAfter) {
            setMoving(true)
            step.onAfter().then(() => setMoving(false))
        }
        return newPosition
    }), [steps])

    useEffect(() => {
        if(open) {
            disableScroll()
        } else {
            enableScroll()
        }
    }, [open])
    
    useLayoutEffect(() => {
        async function loadNext() {
            setMoving(true)
            const step = steps[current]
            if(step.onBefore) {
               await step.onBefore()
            }
            const coords = getCoords(step.selector, { placement: step.placement})
            setPosition(coords)

            setMoving(false) 
        } 
        if(open) loadNext()
    }, [current, steps, open])

    const next = useCallback((stepNumber) => {
        if(isCompleted(steps, stepNumber)) {
            onCompleted()
            setCurrent(0)
        } else {
            setCurrent(stepNumber)
        }
    }, [steps, setCurrent, onCompleted])

    if(!open) {
        return null
    }

    return (
        <Portal>
            <Backdrop className={classes.backdrop} open={true} onClick={(ev) => ev.stopPropagation()}>
                {!isMoving && position && (
                <FocusLock shards={[popperRef]}>
                    <div style={{ position: "absolute", top: position.y, left: position.x }}> 
                        <Badge />
                        <Popover
                            ref={popperRef}
                            anchorEl={createAnchorEl(position)}>
                            <h2>{steps[current].title}</h2>
                            <p>{steps[current].content}</p>
                            <MoveFocusInside>
                                <div className={classes.navigation}>
                                    <Button focusRipple={false} disabled={current === 0} onClick={() =>next(current - 1)}>{previusText}</Button>
                                    <div>
                                        {steps.map((_, index) => <Dot key={index} label={index + 1} actived={index === current} onClick={() => next(index)} />)}
                                    </div>
                                    <Button focusRipple={false} data-autofocus onClick={() =>next(current + 1)}>{current === steps.length - 1 ? finishText : nextText }</Button>
                                </div>
                            </MoveFocusInside>
                        </Popover>
                    </div>
                </FocusLock>
                )
        }
            </Backdrop>
        </Portal>
    )
}


Onboarding.propTypes = {
    open: PropTypes.bool,
    onCompleted: PropTypes.func,
    steps: PropTypes.arrayOf(PropTypes.exact({
        selector: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        placement: PropTypes.oneOf(['left', 'right']),
        onAfter: PropTypes.func,
        onBefore: PropTypes.func
        ,
      })).isRequired,
      next: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
      finish: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
      previus: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
}

Onboarding.defaultProps = {
    open: false,
    onCompleted: () => {},
    finish: "Finish",
    previus: "Previus",
    next: "Next"
}

export default Onboarding
