import React from 'react';
import styles from './AboutWebsite.module.scss';

export const Section = ({ header, children }) => {
    return (
        <details className={styles.section} open>
            <summary className={styles.sectionHeader}>{header}</summary>
            <div className={styles.sectionContent}>{children}</div>
        </details>
    );
};
