import React, { useContext, useState } from 'react';
import { TasksContext } from '../../../contexts/TasksContext';
import Button from '../../UI/Button/Button';
import LogoAdd from '../../UI/Logo/LogoAdd';

import styles from './TaskInput.module.css';

function TaskInput() {
  const { dispatch } = useContext(TasksContext);

  const [isValid, setIsValid] = useState(true);
  const [userInput, setUserInput] = useState('');

  const inputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUserInput(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    dispatch({
      type: 'ADD_TASK',
      newTask: {
        title: userInput,
      },
    });
    setUserInput('');
  };

  return (
    <form
      className={`${styles['task-form']} ${!isValid && styles.invalid}`}
      onSubmit={inputSubmitHandler}
    >
      <input
        type="text"
        className={styles['task-input']}
        value={userInput}
        onChange={inputChangeHandler}
      />
      <div>
        <Button type="submit" func={'add-btn'}>
          <LogoAdd />
        </Button>
      </div>
    </form>
  );
}

export default TaskInput;
