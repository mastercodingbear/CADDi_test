/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddForm from '../component/AddForm';

test('AddForm renders without crashing', () => {
  const add = jest.fn();
  render(<AddForm addTodo={add} />);
});

test('Form submission should not call add method if input field is empty', () => {
  const add = jest.fn();
  const { getByTestId } = render(<AddForm addTodo={add} />);
  const btn = getByTestId('add-button');
  fireEvent.click(btn);
  expect(add).not.toHaveBeenCalledTimes(1);
});

test('Add Todo submission should go through successfully', () => {
  const addItem = jest.fn();
  const { getByTestId } = render(<AddForm addTodo={addItem} />);
  const input = getByTestId('todo-input');
  const btn = getByTestId('add-button');

  fireEvent.change(input, { target: { value: 'qwer' } });
  fireEvent.click(btn);

  expect(addItem).toHaveBeenCalledTimes(1);
  expect(input).toHaveValue('');
});
