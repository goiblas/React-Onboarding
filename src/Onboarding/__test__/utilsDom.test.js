import { getCoords } from "./../utilsDom"

describe('getCoords', () => {
    const DEFAULT_GAP = 32;
    const element = { top: 100, left: 200, right: 350, bottom: 150, height: 50, width: 150 }

    beforeEach(() => {
        jest.restoreAllMocks()
        jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
            return  { 
                getBoundingClientRect: jest.fn().mockReturnValueOnce(element) 
            }
        })
    });

    test('Should get the coordinates of an element',() => {
        const selector = ".html-element"
        const result = getCoords(selector);
        
        const x = element.right + DEFAULT_GAP;
        const y = element.top + element.height / 2;
        expect(result).toEqual({ x, y })
        expect(document.querySelector).toHaveBeenCalledWith(selector)
    })

    test('Should get left side coodinates of a element', () => {
        const options = {
            placement: "left",
            gap: 50
        }
        const result = getCoords("p", options)
        
        const x = element.left - options.gap
        const y = element.top + element.height / 2
        expect(result).toEqual({ x, y })
    })
});
