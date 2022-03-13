import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = ['Docker', 'Docker Swarm', 'Kubernetes', 'AWS', 'Jenkins'];

export const DevopsSkills = () => {
    return (
        <Section>
            <Title id='skills'>Devops Skills</Title>
            <Entry>
                <List list={list} />
            </Entry>
        </Section>
    );
};
