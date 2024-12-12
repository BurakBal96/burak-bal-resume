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
                {/* With 3 years of full time experience on industry, I have curiosity and I enjoy working with different and up-to-date
                technologies also prefer them to have observable results rather than staying in theory. As I progressed through my career as
                a Frontend developer, I also liked learning about other technologies such as DevOps, network and security. */}
                Over the past 5 years of full-time development experience in the industry, working on various projects, teams, and domains, 
                I’ve built high-quality React applications that meet deadlines without sacrificing quality. 
                
                I work quickly and efficiently, staying calm under pressure, and I’m always ready to take responsibility 
                or initiative to improve tasks or structures to help make projects even more successful.

                <br />
                <br />
                I also have experience in creating PRDs for designing systems or features end-to-end, taking into account server-side changes, APIs, and communication workflows. 
                This process requires strong soft skills, such as understanding the business domain, seeing the bigger picture, and effectively communicating with stakeholders to align technical and business goals.

                <br /><br />
                These experiences have allowed me to bridge the gap between technical and business teams, ensuring smoother collaboration and more impactful results. 
                I’m passionate about delivering solutions that not only meet technical standards but also drive real value for users and stakeholders.


                <br /><br />
                PRD: Product requirements document
            </Entry>
        </Section>
    );
};
