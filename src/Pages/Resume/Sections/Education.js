import React from 'react';
import { Section, Title, Entry } from '../Section';
import styles from '../Resume.module.scss';

export const Education = ({ ...props }) => {
    return (
        <Section {...props}>
            <Title>Education</Title>
            <EducationEntry
                date={'02/19 - 06/19'}
                degree='Erasmus+Bachelor'
                institute='Czestochowa University of Technology'
                location='Czestochowa, Poland'
                department='Institute of Computational Intelligence'
            />
            <EducationEntry
                date={'09/15 - 06/20'}
                degree='Bachelor'
                institute='Yıldız Technical University'
                location='Istanbul, Turkey'
                department='Computer Science'
            />
        </Section>
    );
};

const EducationEntry = ({ degree, institute, date, location, department }) => {
    return (
        <Entry>
            <div>
                <div className={styles.sectionEntryHeader}>
                    <b>{degree}</b>
                    <div className={styles.sectionEntryHeaderDate}>{date}</div>
                </div>
                <i>{institute}</i>
                <span>, {location}</span>
                <div>
                    <i>{department}</i>
                </div>
            </div>
        </Entry>
    );
};
