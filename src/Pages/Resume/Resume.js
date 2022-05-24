import React from 'react';
import styles from './Resume.module.scss';
import { ResumeHeader } from './ResumeHeader';
import { SectionWrapper } from './Section';
import { SummaryDevops, SummaryFrontend, Education, Languages, FrontendSkills, DevopsSkills } from './Sections';
import { Experience } from './Sections/Experience';

export const Resume = () => {
    return (
        <div className={styles.resume}>
            <ResumeHeader data-testid='resumeHeader' />
            <div className={styles.websiteLink + ' only-print'}>
                Check my up2date resume at: <a>{process.env.REACT_APP_FRONTEND_END ? 'https://fe.burakbal.tk' : 'https://burakbal.tk'}</a>
            </div>
            <SectionWrapper>
                <div className={styles.sectionLeft}>
                    <SummaryDevops data-testid='summaryDevops' />
                    <SummaryFrontend data-testid='summaryFrontend' />
                    <Education data-testid='education' />
                    <DevopsSkills data-testid='devopsSkills' />
                    <FrontendSkills data-testid='frontendSkills' />
                    <Languages data-testid='languages' />
                </div>

                <div className={styles.sectionRight}>
                    <Experience data-testid='experience' />
                </div>
            </SectionWrapper>
        </div>
    );
};
