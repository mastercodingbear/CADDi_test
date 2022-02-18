import React, { ChangeEvent, FormEvent, useState } from 'react';

interface AddFormProps {
  addTodo: (newItem: string) => void;
}
const AddForm: React.FC<AddFormProps> = ({ addTodo }) => {
  const [newItem, setNewItem] = useState<string>('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newItem === '') return;
    addTodo(newItem);
    setNewItem('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };
  return (
    <form className="flex justify-center items-center" onSubmit={handleSubmit}>
      <input
        className="block w-full max-w-xs px-3 py-2 m-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        id="todo-input"
        data-testid="todo-input"
        value={newItem}
        onChange={onInputChange}
      />
      <button
        className="bg-sky-500 hover:bg-sky-700 m-1 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white"
        type="submit"
        id="add-button"
        value={newItem}
        data-testid="add-button"
      >
        Add
      </button>
    </form>
  );
};

export default AddForm;
