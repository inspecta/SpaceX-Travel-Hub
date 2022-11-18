import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

test('renders the navbar component', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
