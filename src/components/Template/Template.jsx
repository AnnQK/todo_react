import React from 'react';
import TaskInput from '../tasks/TaskInput/TaskInput';
import TaskList from '../tasks/TaskList/TaskList';

function Template({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <TaskInput />
      <TaskList />
    </>
  );
}

export default Template;
