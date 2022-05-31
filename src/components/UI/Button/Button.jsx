import React from 'react';

import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${styles[props.func]}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
