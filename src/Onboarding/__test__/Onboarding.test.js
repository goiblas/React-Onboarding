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
        const steps = [{
            selector: ".selector",
            title: "Title Step 1",
            content: "content",
            placement: "right",
        }, {
            selector: ".selector-2",
            title: "Title Step 2",
            content: "content 2",
        }]

        const onCompleted = jest.fn()
        render(<Onboarding open={true} steps={steps} onCompleted={onCompleted} />)
        
        expect( await screen.findByText("Title Step 1") ).toBeInTheDocument()
        expect( await screen.findByText("content") ).toBeInTheDocument()

        expect(utilsDom.scrollIntoView).toHaveBeenCalledWith(".selector");
        
        userEvent.click(screen.getByRole('button', { name: 'Next' }))
        
        expect( await screen.findByText("Title Step 2") ).toBeInTheDocument()
        expect( await screen.findByText("content 2") ).toBeInTheDocument()
    });
});