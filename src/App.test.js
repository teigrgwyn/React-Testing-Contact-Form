import React from 'React';
import App from './App';
import { render, screen } from '@testing-library/react';

test("renders App without errors", () => {
  // arrange
  const container = render(<App />);

  // act
  const inputNameFirst = screen.queryByLabelText(/first name/i);
  const inputNameLast = screen.queryByLabelText(/last name/i);
  const inputEmail = screen.queryByLabelText(/email/i);
  const inputMessage = screen.queryByLabelText(/message/i);
  //const inputSubmit = screen.getByRole('submit');

  // assert
  console.log(inputNameFirst);
})