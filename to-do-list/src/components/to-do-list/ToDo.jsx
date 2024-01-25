import React, { useState } from 'react';

const ToDo = () => {
  const existingThings = ['Sleep', 'Eat'];
  const [data, setData] = useState(existingThings);
  const [input, setInput] = useState('');

  const addItems = () => {
    if (input.trim() !== '') {
      setData((prevData) => [...prevData, input]);
      setInput('');
    }
  };

  const deleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const editItem = (index) => {
    const editedItem = prompt('Edit item:', data[index]);
    if (editedItem !== null) {
      const newData = [...data];
      newData[index] = editedItem;
      setData(newData);
    }
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={addItems}>Add Items</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>Delete</button>
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;