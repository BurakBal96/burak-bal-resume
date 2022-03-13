import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = [
    'JavaScript',
    'React',
    'HTML&CSS',
    'NodeJs',
    'Python',
    'MobX',
    'Selenium',
    'Mocha',
    'Cypress'
    // 'ReactWindow, Victory'
];

export const FrontendSkills = () => {
    return (
        <Section>
            <Title>Frontend Skills</Title>
            <Entry>
                <List list={list} />
            </Entry>
        </Section>
    );
};
