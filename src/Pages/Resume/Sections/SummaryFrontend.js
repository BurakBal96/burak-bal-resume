import React from 'react';
import { Section, Title, Entry } from '../Section';

export const SummaryFrontend = ({ ...props }) => {
    if (!process.env.REACT_APP_FRONTEND_RESUME) return null;

    return (
        <Section {...props}>
            <Title id='summary'>Summary</Title>
            <Entry>
                I enjoy experiencing and learning different and up-to-date technologies and I prefer them to have visual results rather than
                staying in theory. As I advance my career as a Frontend developer, I also enjoy learning about how other technologies
                outside of the Frontend work.
            </Entry>
        </Section>
    );
};
