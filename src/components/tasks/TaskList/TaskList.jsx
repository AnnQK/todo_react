import React, { useContext } from 'react';
import { TasksContext } from '../../../contexts/TasksContext';
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

function TaskList() {
  const { tasks } = useContext(TasksContext);
  return tasks.length ? (
    <ul className={styles['task-list']}>
      {tasks.map((item) => {
        return <TaskItem task={item} key={item.id} />;
      })}
    </ul>
  ) : (
    <div className={styles.empty}>No Tasks...</div>
  );
}

export default TaskList;
