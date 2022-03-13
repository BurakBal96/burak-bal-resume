import React from 'react';
import styles from './Resume.module.scss';
import { ResumeHeader } from './ResumeHeader';
import { SectionWrapper } from './Section';
import { Summary, Education, Languages, FrontendSkills, DevopsSkills } from './Sections';
import { Experience } from './Sections/Experience';

export const Resume = () => {
    return (
        <div className={styles.resume}>
            <ResumeHeader />
            <SectionWrapper>
                <div className={styles.sectionLeft}>
                    <Summary />
                    <Education />
                    <DevopsSkills />
                    <FrontendSkills />
                    <Languages />
                </div>

                <div className={styles.sectionRight}>
                    <Experience />
                </div>
            </SectionWrapper>
        </div>
    );
};
