import React from 'react';
import { tasksReducer } from '../reducers/tasksReducer';

export const TasksContext = React.createContext();

function TasksContextProvider(props) {
  const [tasks, dispatch] = React.useReducer(tasksReducer, [], () => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {props.children}
    </TasksContext.Provider>
  );
}

export default TasksContextProvider;
