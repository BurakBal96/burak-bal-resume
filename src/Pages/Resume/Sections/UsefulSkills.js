import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = ['AWS', 'Git', 'Jenkins', 'Docker', 'Storybook', 'npm'];

export const UsefulSkills = ({ ...props }) => {
    return (
        <Section {...props}>
            <Title id='skills'>Useful Skills</Title>
            <Entry>
                <List list={list} narrow numberOfCols='4' />
            </Entry>
        </Section>
    );
};
