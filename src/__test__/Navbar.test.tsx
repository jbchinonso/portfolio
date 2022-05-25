import react from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../componenets/Navbar/Navbar'

describe('Test suite for the Navbar', () => {
    
    test('logo is in page', () => {
        render(
          <Router>
            <Navbar />
          </Router>
        );
        const logo = screen.getByAltText("JB logo");
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAccessibleName("JB logo");
    });


    test('hamburger is in Page', () => {
        render(
          <Router>
            <Navbar />
          </Router>
        );
        const hamburger = screen.getByTestId("hamburger");
         expect(hamburger).toHaveClass("hamburger");
    })

    test('nav is in page', async () => {
        render(
          <Router>
            <Navbar />
          </Router>
        );

        const nav = screen.getByTestId("nav");
        expect(nav).toBeDefined();
       
    })

    test("link is in page", async () => {
      render(
        <Router>
          <Navbar />
        </Router>
      );

     
      const navlink = await screen.findAllByRole("link");
        expect(navlink).toHaveLength(5);
        expect(navlink[0]).toHaveAttribute('href', "/")
        expect(navlink[0]).toHaveTextContent("About");
        expect(navlink[1]).toHaveTextContent("Experience");
        expect(navlink[2]).toHaveTextContent("Work");
        expect(navlink[3]).toHaveTextContent("Contact");
        expect(navlink[4]).toHaveTextContent("Resume");
    
    });
})