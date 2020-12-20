import React, { useState, useCallback, useLayoutEffect, useRef, useEffect } from "react"
import FocusLock, { MoveFocusInside } from 'react-focus-lock'
import { Backdrop, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useDebouncedCallback } from 'use-debounce'
import Portal from "./Portal"
import Badge from "./Badge"
import { getCoords, scrollIntoView } from "./utilsDom"
import Popover from "./Popover"
import Dot from "./Dot"

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
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

const Onboarding = ({ open, steps, onCompleted }) => {
    const classes = useStyles();
    const [currentStepNumber, setCurrentStepNumber] = useState(0)
    const [position, setPosition] = useState(null)
    const [isMoving, setMoving] = useState(false)
    const popperRef = useRef()

    const isCompleted = (arr, position) => !arr[position];

    useEffect(() => {
        if(open) {
            disableBodyScroll(window)
        } else {
            enableBodyScroll(window)
            setCurrentStepNumber(0)
        }
    }, [open])

    useLayoutEffect(() => {
        async function loadNext() {
            const step = steps[currentStepNumber]
            if(step.onBefore) {
                await step.onBefore()
            }
            setMoving(true)

            await scrollIntoView(step.selector)
            setPosition(getCoords(step.selector))

            setMoving(false) 
        } 
        loadNext()
    }, [currentStepNumber, steps])


    const next = useCallback(async(stepNumber) => {
        const step = steps[currentStepNumber]
        if(step.onAfter) {
            await step.onAfter()
        }
        if(isCompleted(steps, stepNumber)) {
            onCompleted()
        } else {
            setCurrentStepNumber(stepNumber)
        }
    }, [steps, onCompleted])

    const resizeDebounced = useDebouncedCallback(() =>{ 
        if(open && !isMoving) {
            const step = steps[currentStepNumber]
            
            setMoving(true)
    
            scrollIntoView(step.selector).then(() => {
                setPosition(getCoords(step.selector))
                setMoving(false) 
            })
        }
    }, 200)

    useEffect(() => {
        window.addEventListener("resize", resizeDebounced.callback)
        
        return () => {
            window.removeEventListener("resize", resizeDebounced.callback)
        }
    }, [resizeDebounced.callback])

    const handleClose = (ev) =>  ev.stopPropagation()  

    if(!open) {
        return null
    }

    return (
        <Portal>
            <Backdrop className={classes.backdrop} open={true} onClick={handleClose}>
                {!isMoving && position && (
                <FocusLock shards={[popperRef]}>
                    <div style={{ position: "absolute", top: position.y, left: position.x }}> 
                        <Badge />
                        <Popover
                            ref={popperRef}
                            anchorEl={createAnchorEl(position)}>
                            <h2>{steps[currentStepNumber].title}</h2>
                            <p>{steps[currentStepNumber].content}</p>
                            <MoveFocusInside>
                                <div className={classes.navigation}>
                                    <Button focusRipple={false} disabled={currentStepNumber === 0} onClick={() =>next(currentStepNumber - 1)}>Previus</Button>
                                    <div>
                                        {steps.map((_, index) => <Dot key={index} actived={index === currentStepNumber} onClick={() => next(index)} />)}
                                    </div>
                                    <Button focusRipple={false} data-autofocus onClick={() =>next(currentStepNumber + 1)}>{currentStepNumber === steps.length - 1 ? "Finish" : "Next" }</Button>
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

export default Onboarding