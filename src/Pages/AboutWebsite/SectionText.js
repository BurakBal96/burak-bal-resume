import React from 'react';
import styles from './AboutWebsite.module.scss';

export const SectionText = ({ children }) => {
    return <div className={styles.text}>{children}</div>;
};
