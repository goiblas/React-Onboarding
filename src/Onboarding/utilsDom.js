export function getCoords(selector, { gap = 32, placement = "right" } = {}) {
    const element = document.querySelector(selector)
    const coordinates = element.getBoundingClientRect()

    const y = coordinates.top + (coordinates.height / 2)
    const x = placement === "right"
                ? coordinates.right + gap
                : coordinates.left - gap

    return {
        y,
        x
    }
}