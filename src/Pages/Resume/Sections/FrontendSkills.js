import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = [
    'React',
    'JavaScript TypeScript',
    'HTML/CSS',
    'NodeJS',
    'MobX - State Management',
    'Cypress',
    'Jest',
    'Mocha',
    'Selenium',

    'AWS',
    'Git',
    'Jenkins',
    'Storybook',
    'Docker',
    'npm',
    "CI/CD",
    "SonarQube"
];

export const FrontendSkills = ({ ...props }) => {
    return (
        <Section {...props}>
            <Title id='skills'>Skills</Title>
            <Entry>
                <List list={list} narrow />
            </Entry>
        </Section>
    );
};
