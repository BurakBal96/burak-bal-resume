import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = ['Docker', 'Docker Swarm', 'Kubernetes', 'kOps', 'AWS', 'Jenkins'];

export const DevopsSkills = ({ ...props }) => {
    if (process.env.REACT_APP_FRONTEND_RESUME) return null;

    return (
        <Section {...props}>
            <Title id='skills'>Devops Skills</Title>
            <Entry>
                <List list={list} />
            </Entry>
        </Section>
    );
};
