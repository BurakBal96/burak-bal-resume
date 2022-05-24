import React from 'react';
import styles from './AboutWebsite.module.scss';

export const SectionHeader = ({ children }) => {
    return <div className={styles.sectionHeader}>{children}</div>;
};
