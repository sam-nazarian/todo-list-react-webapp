import React from 'react';
import styles from './Button.module.css';

// Using CSS Modules
// Styles are scoped to the component in which we use them
// changes classNames to be unique

const Button = (props) => {
  return (
    // className is going to be component_cssClass__uniqueHash
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
