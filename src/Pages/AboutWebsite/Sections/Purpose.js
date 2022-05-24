import React from 'react';
import { SectionHeader } from '../SectionHeader';
import { SectionText } from '../SectionText';
import styles from '../AboutWebsite.module.scss';

export const Purpose = () => {
    return (
        <div className={styles.section}>
            <SectionHeader>Purpose Of This Page</SectionHeader>
            <SectionText>This page contains my resume and process of create and serve this website.</SectionText>
        </div>
    );
};
