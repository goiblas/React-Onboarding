import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Onboarding from "./../index"
import * as utilsDom from "../utilsDom"

describe('onBoarding', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
        jest.spyOn(utilsDom, 'getCoords').mockReturnValue({x: 0, y: 0})
        jest.spyOn(utilsDom, 'scrollIntoView').mockResolvedValue(undefined)
    });
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
            onBefore: mockLastOnBefore,
            onAfter: mockLastOnAfter 
        }]

        const onCompleted = jest.fn()
        const { rerender  } = render(<Onboarding open={true} steps={steps} onCompleted={onCompleted} />)
        
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()
        expect( await screen.findByText("content 1") ).toBeInTheDocument()

        expect(mockOnBefore).toHaveBeenCalled()
        expect(utilsDom.scrollIntoView).toHaveBeenCalledWith(".selector");
        expect(utilsDom.getCoords).toHaveBeenCalledWith(".selector");

        userEvent.click(screen.getByRole('button', { name: 'Next' }))
        
        expect( await screen.findByText("Title 2") ).toBeInTheDocument()
        expect( await screen.findByText("content 2") ).toBeInTheDocument()
    
        expect(mockOnAfter).toHaveBeenCalled()
        expect(mockLastOnBefore).toHaveBeenCalled()
        
        userEvent.click(screen.getByRole('button', { name: 'Finish' }))
        
        expect( await screen.findByText("Title 1") ).toBeInTheDocument()

        expect(mockLastOnAfter).toHaveBeenCalled()
        expect(onCompleted).toHaveBeenCalled()

        rerender(<Onboarding open={false} steps={steps} onCompleted={onCompleted} />)

        expect( screen.queryByText("Title 1") ).not.toBeInTheDocument()
    });
});