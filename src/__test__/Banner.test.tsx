import react from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Banner from '../componenets/Banner/Banner'

describe('Test Banner component', () => {
    test('Name is on Page', () => {
        render(
          <Router>
            <Banner />
          </Router>
        );
        const name = screen.getByText(/Johnbosco Nweke/i);
        const skill = screen.getByText(/Fullstack Software Engineer./i);
        expect(name).toBeInTheDocument()
        expect(skill).toBeInTheDocument()

    })

    test('Button click', () => {
        const click = jest.fn();
        render(
          <Router>
            <Banner />
          </Router>
        );

        const button = screen.getByRole('button')
        fireEvent.click(button);
        expect(button).toBeTruthy();
        expect(button).toHaveTextContent("Checkout my blogs");
        expect(window.location.href).toBe("http://localhost/home");

    })

})