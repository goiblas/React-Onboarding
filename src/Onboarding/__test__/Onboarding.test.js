import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Onboarding from "./../index"
import * as utilsDom from "../utilsDom"
import * as scrollLock from "../scrollLock"

describe('onBoarding', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        
        jest.spyOn(scrollLock, 'enableScroll').mockReturnValue({x: 0, y: 0})
        jest.spyOn(scrollLock, 'disableScroll').mockReturnValue({x: 0, y: 0})

        jest.spyOn(utilsDom, 'getCoords').mockReturnValue({x: 0, y: 0})
        jest.spyOn(utilsDom, 'scrollIntoView').mockResolvedValue(undefined)
    });

    test('Should disable scroll when it is opened', async () => {
        const steps = [{
            selector: ".selector",
            title: "Title 1",
            content: "content 1"
        }]
        const { rerender  } = render(<Onboarding open={true} steps={steps} onCompleted={jest.fn()} />)
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()
        expect(scrollLock.disableScroll).toHaveBeenCalled();
        
        rerender(<Onboarding open={false} steps={steps} onCompleted={jest.fn()} />)
        expect(scrollLock.enableScroll).toHaveBeenCalled();
    })

    test('Should be able to navigate using the dots', async () => {
        const steps = [{
            title: "Title 1",
            selector: "",
            content: ""
        }, {
            title: "Title 2",
            selector: "",
            content: ""
        }, {
            title: "Title 3",
            selector: "",
            content: ""
        }]
        
        render(<Onboarding open={true} steps={steps} onCompleted={jest.fn()} />)
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()
        
        userEvent.click(screen.getByRole('button', { name: '3' }))
        expect( await screen.findByText("Title 3") ).toBeInTheDocument()

        userEvent.click(screen.getByRole('button', { name: '2' }))
        expect( await screen.findByText("Title 2") ).toBeInTheDocument()
    })

    test('Should show the steps and be able to navigate them', async() => {
       
        const mockOnBefore = jest.fn(() => Promise.resolve())
        const mockOnAfter = jest.fn(() => Promise.resolve())
        const mockLastOnBefore = jest.fn(() => Promise.resolve())
        const mockLastOnAfter = jest.fn(() => Promise.resolve())
        const steps = [{
            selector: ".selector",
            title: "Title 1",
            content: "content 1",
            onBefore: mockOnBefore,
            onAfter: mockOnAfter
        }, {
            selector: ".selector-2",
            title: "Title 2",
            content: "content 2",
            placement: "left",
            onBefore: mockLastOnBefore,
            onAfter: mockLastOnAfter 
        }]

        const onCompleted = jest.fn()
        const { rerender  } = render(<Onboarding open={true} steps={steps} onCompleted={onCompleted} />)
        
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()
        expect( await screen.findByText("content 1") ).toBeInTheDocument()

        expect(mockOnBefore).toHaveBeenCalled()
        expect(utilsDom.scrollIntoView).toHaveBeenCalledWith(".selector");
        expect(utilsDom.getCoords).toHaveBeenCalledWith(".selector", { placement: undefined });

        userEvent.click(screen.getByRole('button', { name: 'Next' }))
        
        expect( await screen.findByText("Title 2") ).toBeInTheDocument()
        expect( await screen.findByText("content 2") ).toBeInTheDocument()
    
        expect(mockOnAfter).toHaveBeenCalled()
        expect(mockLastOnBefore).toHaveBeenCalled()
        expect(utilsDom.scrollIntoView).toHaveBeenCalledWith(".selector-2");
        expect(utilsDom.getCoords).toHaveBeenCalledWith(".selector-2", { placement: "left" });

        userEvent.click(screen.getByRole('button', { name: 'Finish' }))
        
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()

        expect(mockLastOnAfter).toHaveBeenCalled()
        expect(onCompleted).toHaveBeenCalled()

        rerender(<Onboarding open={false} steps={steps} onCompleted={onCompleted} />)

        expect( screen.queryByText("Title 1") ).not.toBeInTheDocument()
    });
});