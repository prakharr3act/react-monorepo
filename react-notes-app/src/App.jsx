import React, { useState } from "react";
import { X } from 'lucide-react';
import './App.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [tasks, setTasks] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!title.trim() && !detail.trim()) return;
    setTasks(prevTasks => [...prevTasks, { title, detail }]);
    setTitle('');
    setDetail('');
  };

  const deleteHandler = (index) => {
    setTasks(prevTasks => prevTasks.filter((_, idx) => idx !== index));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col">
      <form onSubmit={submitHandler} className="max-w-4xl mx-auto mb-10 w-full">
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Enter Note heading..."
            className="px-4 py-3 border border-gray-700 bg-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter the details..." 
            className="px-4 py-3 border border-gray-700 bg-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-36"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
            Add Note
          </button>
        </div>
      </form>

      <div className="notes-area flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tasks.map((element, idx) => (
            <div key={idx} className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between h-64 relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <button onClick={() => deleteHandler(idx)} className="absolute top-2 right-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition duration-200">
                <X className="w-4 h-4" /> 
              </button>
              <div className="note-content overflow-hidden">
                <h3 className='font-extrabold text-2xl mb-2 truncate'>{element.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-6">{element.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
