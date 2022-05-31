import React, { useContext, useState } from 'react';
import { TasksContext } from '../../../contexts/TasksContext';
import Button from '../../UI/Button/Button';
import LogoDone from '../../UI/Logo/LogoDone';
import LogoTrash from '../../UI/Logo/LogoTrash';
import styles from './TaskItem.module.css';

function TaskItem({ task }) {
  const { dispatch } = useContext(TasksContext);

  const [isActiveTask, setIsActiveTask] = useState(true);

  const doTaskHandler = () => {
    setIsActiveTask(!isActiveTask);
  };

  return (
    <li
      className={`${styles['task-item']} ${!isActiveTask && styles.inactive}`}
    >
      <Button func={'checkbox-btn'} onClick={doTaskHandler}>
        <LogoDone />
      </Button>
      <h3 className={styles['task-item__title']}>{task.title}</h3>
      <Button func={'category-btn'}>{task.category}</Button>
      <Button
        func={'trash-btn'}
        onClick={() => {
          dispatch({ type: 'REMOVE_TASK', id: task.id });
        }}
      >
        <LogoTrash />
      </Button>
    </li>
  );
}

export default TaskItem;
