import React from 'react';
import { Section, Title, Entry } from '../Section';

export const SummaryFrontend = ({ ...props }) => {
    if (!process.env.REACT_APP_FRONTEND_RESUME) return null;

    return (
        <Section {...props}>
            <Title id='summary'>Summary</Title>
            <Entry>
                Over the past 5 years of full-time development experience in the industry, working on various projects, teams, and domains,
                I’ve built high-quality React applications that meet deadlines without sacrificing quality. I work quickly and efficiently,
                stay calm under pressure, and am always ready to take responsibility or initiative to improve and make projects even more
                successful.
                <br />
                <br />
                I also have experience in creating PRDs for designing systems or features end-to-end, taking into account server-side
                changes, APIs, and communication workflows. These experiences have allowed me to bridge the gap between technical and
                business teams, ensuring smoother collaboration and more impactful results.
                <br />
                <br />
                I’m passionate about delivering solutions that not only meet technical standards but also drive real value for users and
                stakeholders.
                <br />
                <br />
                PRD: Product requirements document
            </Entry>
        </Section>
    );
};
