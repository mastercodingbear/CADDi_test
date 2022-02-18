import React, { ChangeEvent, useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from './TodoItem';
import AddForm from './AddForm';

export interface TodoInterface {
  id: string;
  title: string;
}

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState<TodoInterface[]>([]);

  const onHandleDoneTodo = (id: string) => {
    const remaining = todoList.filter((task) => task.id !== id);

    setTodoList(remaining);
  };

  const addItem = (newItem: string) => {
    setTodoList([...todoList, { id: uniqid(), title: newItem }]);
  };

  return (
    <div className="todoList">
      <h2 className="text-xl p-4">Task List</h2>
      <div className="w-full sm:max-w-xs md:max-w-md m-auto bg-gray-300 p-3">
        <div className="m-auto">
          {todoList.map((todo: TodoInterface, index: number) => (
            <TodoItem
              index={index}
              todo={todo}
              key={index}
              doneTodo={onHandleDoneTodo}
            />
          ))}
        </div>
        <AddForm addTodo={addItem} />
      </div>
    </div>
  );
};

export default TodoList;
