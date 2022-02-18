/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import TodoItem from '../component/TodoItem';

const mockedTask = {
  id: '1234',
  title: 'asdf',
};
const mockedIndex = 3;

const doneTodo = jest.fn();

afterEach(() => {
  cleanup();
});

test('Todo item to be deleted on click of delete button', () => {
  const { getByTestId } = render(
    <TodoItem todo={mockedTask} index={mockedIndex} doneTodo={doneTodo} />
  );
  const doneBtn = getByTestId(`complete-button-${mockedIndex}`);
  fireEvent.click(doneBtn);

  expect(doneTodo).toHaveBeenCalledTimes(1);
  expect(doneTodo).toHaveBeenCalledWith('1234');
});