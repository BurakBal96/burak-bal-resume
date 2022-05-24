import React from 'react';
import { Section, Title, Entry } from '../Section';

export const SummaryDevops = ({ ...props }) => {
    if (process.env.REACT_APP_FRONTEND_RESUME) return null;

    return (
        <Section {...props}>
            <Title id='summary'>Summary</Title>
            <Entry>
                I enjoy learning by experimenting with various tools and technologies. I have a background frontend development but my focus
                and curiosity recently shifted towards devops.
            </Entry>
        </Section>
    );
};
