import scrollIntoViewIfNeeded from 'smooth-scroll-into-view-if-needed';

export function getCoords(selector, { gap = 32, position = "right" } = {}) {
    const element = document.querySelector(selector)
    const coordinates = element.getBoundingClientRect()

    const y = coordinates.top + (coordinates.height / 2)
    const x = position === "right"
                ? coordinates.right + gap
                : coordinates.left - gap

    return {
        y,
        x
    }
}

export function scrollIntoView(selector) {
    return new Promise( resolve => {
        scrollIntoViewIfNeeded(document.querySelector(selector))
        let isScrolling
        
        const onScroll = () => {
            window.clearTimeout(isScrolling)
            isScrolling = setTimeout( resolve , 66);
        }
    
        window.addEventListener('scroll', onScroll)
    
        onScroll()
    })
}

