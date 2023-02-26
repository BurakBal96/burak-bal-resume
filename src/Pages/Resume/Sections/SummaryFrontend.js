import React from 'react';
import { Section, Title, Entry } from '../Section';

export const SummaryFrontend = ({ ...props }) => {
    if (!process.env.REACT_APP_FRONTEND_RESUME) return null;

    return (
        <Section {...props}>
            <Title
                id='summary'
                // rightText={
                //     <>
                //         Please check my up2date resume at:{' '}
                //         <a>{process.env.REACT_APP_FRONTEND_RESUME ? 'https://burakbal.com' : 'https://burakbal.com'}</a>
                //     </>
                // }
            >
                Summary
            </Title>
            <Entry>
                With 3 years of full time experience on industry, I have curiosity and I enjoy working with different and up-to-date
                technologies also prefer them to have observable results rather than staying in theory. As I progressed through my career as
                a Frontend developer, I also liked learning about other technologies such as DevOps, network and security.
            </Entry>
        </Section>
    );
};
