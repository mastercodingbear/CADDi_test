import React from 'react';
import { TodoInterface } from './TodoList';
interface TaskItemProps {
  index: number;
  todo: TodoInterface;
  doneTodo: (id: string) => void;
}
const TaskItem: React.FC<TaskItemProps> = ({ index, todo, doneTodo }) => {
  const onDoneTodo = () => {
    doneTodo(todo.id);
  };
  return (
    <div className="flex justify-between items-center p-2 m-1">
      <li className="p-2" id={`todo-item-${index}`}>
        {todo.title}
      </li>
      <button
        className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
        onClick={onDoneTodo}
        id={`complete-button-${index}`}
        data-testid={`complete-button-${index}`}
      >
        DONE
      </button>
    </div>
  );
};

export default TaskItem;
