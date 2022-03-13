import React from 'react';
import styles from './Button.module.scss';

export { styles as ButtonStyles };

export const Button = ({ className = '', ...props }) => {
    return <div className={`${styles.button} ${className}`} {...props} />;
};
