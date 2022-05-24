import React from 'react';
import styles from './Layout.module.scss';

export const Page = ({ children }) => {
    return (
        <div className={styles.page} data-testid='page'>
            {children}
        </div>
    );
};
