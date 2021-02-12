import React from 'React';
import App from './App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

test("Form input validation & submission!", async () => {
  // arrange
  const container = render(<App />);

  // targets 'htmlFor' (JSX) or 'for' (HTML) text
  const inputFirstname = container.queryByLabelText(/first name/i);
  const inputLastname = container.queryByLabelText(/last name/i);
  const inputEmail = container.queryByLabelText(/email/i);
  const inputMessage = container.queryByLabelText(/message/i);
  //await act(async () => {
  const inputSubmit = container.queryByRole('button', { name:/submit/i });

  //await act(async () => {})
  userEvent.type(inputFirstname, 'Cory');
  userEvent.type(inputFirstname, 'Cory');
  userEvent.type(inputLastname, 'Young');
  userEvent.type(inputEmail, 'cory@yahoo.com');
  userEvent.type(inputMessage, 'test message!');
  await act(async () => {
    userEvent.click(inputSubmit);
  })

  // assert

  //console.log(container);

  // 'state' isn't a property of 'container' for us to search, unlike it says online (2019), but we should be able to check state for the object below... too advanced atm?
  // expect(container.state.data('data)).toEqual({
  //   firstName: expect.any(String),
  //   lastName: expect.any(String),
  //   email: expect.any(String),
  //   message: expect.any(String)
  // })

  // expect.objectContaining({
  //   firstName: expect.any(String),
  //   lastName: expect.any(String),
  //   email: expect.any(String),
  //   message: expect.any(String)
  // });
})