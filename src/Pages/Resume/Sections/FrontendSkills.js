import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = [
    ['React', 'JavaScript TypeScript', 'HTML/CSS'],
    ['Sass/Scss', 'MobX - State Management', 'Figma'],
    ['NodeJS', 'Jest', 'Cypress'],
    ['Mocha', 'Selenium', 'AWS'],
    ['Git', 'Jenkins', 'Storybook'],
    ['Docker', 'npm', 'CI/CD'],
    ['SonarQube']
].flat();

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
