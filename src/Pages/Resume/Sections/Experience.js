import React from 'react';
import { Section, Title, Entry, List } from '../Section';
import styles from '../Resume.module.scss';

export const Experience = ({ ...props }) => {
    return (
        <Section {...props}>
            <Title
                id='experience'
                rightText={
                    <div className={styles.websiteLink + ' only-print'}>
                        Please check my up2date resume at:{' '}
                        <a href={process.env.REACT_APP_FRONTEND_RESUME ? 'https://burakbal.com' : 'https://burakbal.com'}>
                            {process.env.REACT_APP_FRONTEND_RESUME ? 'https://burakbal.com' : 'https://burakbal.com'}
                        </a>
                    </div>
                }
            >
                Experience
            </Title>

            <ExperienceEntry
                firm='Stenn International'
                position='Frontend Engineer'
                date={'10/23 - 12/24'}
                size='Late Stage (200+ employees)'
                achievements={stennAchievements}
                technologies={stennTechnologies}
                technologiesCols={5}
            />

            <ExperienceEntry
                firm='Builder.ai'
                position='Frontend Developer'
                date={'07/22 - 10/23'}
                size='Series D (500+ employees)'
                achievements={builderAiAchievements}
                technologies={builderAiTechnologies}
                technologiesCols={5}
            />

            <ExperienceEntry
                firm='Ceiba Healthcare'
                position='Frontend Developer'
                date={'05/21 - 07/22'}
                size='Growing (25-50 employees)'
                achievements={ceibaAchievements}
                technologies={ceibaTechnologies}
                technologiesCols={5}
            />
            <ExperienceEntry
                firm='Evet Technologies'
                position='Frontend Developer'
                date={'03/20 - 04/21'}
                size='Seed (5-10 employees)'
                achievements={evetAchievements}
                technologies={evetTechnologies}
                technologiesCols={5}
            />
        </Section>
    );
};

const ExperienceEntry = ({ firm, position, date, size, achievements, technologies, technologiesCols }) => {
    return (
        <Entry>
            <div className={styles.sectionEntryHeader}>
                <div className={styles.positionInformation}>
                    <span>{firm}</span>
                    <span>, {position}</span>
                </div>
                <div className={styles.sectionEntryHeaderDate}>{date}</div>
            </div>
            <div className='mb-2 space-between'>
                <b>Achievements:</b>
                <div className={styles.sectionEntryHeaderDate}>{size}</div>
            </div>
            <List smallTextOnPrint smallText indent list={achievements} numberOfCols='1' />
            <div className='mb-2 mt-10'>
                <b>Technologies:</b>
            </div>
            <List smallTextOnPrint smallText indent list={technologies} numberOfCols={technologiesCols} />
        </Entry>
    );
};

const stennAchievements = [
    'Designed features and pages end to end, while considering business needs, server-side requirements, communication, and limitations.',
    'Took key responsibility for designing and implementing major changes, such as user experience improvements, the apply/reapply flow, and the user FBO wallet.',
    'Added automatic Typescript generation for APIs and data structures using GraphQL.',
    'Collaborated on the development and improvement of the UIKit library, built on top of Material-UI.',
    'Took responsibility for monitoring application state using Sentry and OpsGenie.',
    'Participated in transitioning the email rendering system from templates to React-Email.'
    // OAuth, auto logout, cookie consent
];

const stennTechnologies = [
    'React/TypeScript',
    'GraphQL & ReactQuery',
    'Material UI',
    'Azure Cloud',
    'Jest',
    'StoryBook',
    'Sentry & OpsGenie'
];

const builderAiAchievements = [
    'Worked on fast-paced ecommerce, elearning and core teams with 3 months of delivery time as a contractor which uses ReactJS with TypeScript and Material UI. Worked on developing block based pages like micro-frontend structure.',
    'Optimized code structure and performance of existing components as well as participated on creating new ones. Reviewed and improved the code quality of other developers and also guided them to apply better solutions.',
    'Wrote unit tests and integration tests which has at least 80% coverage.'
];

const builderAiTechnologies = ['React - HTML/CSS', 'Jest & SonarQube', 'TypeScript', 'Material UI'];

const ceibaAchievements = [
    'Developed re-usable components from scratch for consistency, easier development, better customization and performance such as form input components, dynamic data grid, filter panel, calendar, lazy load, virtualization and etc.',
    'Implemented requirements for better SOLID principles, added global state management to divide models, requests, views (MVC) and configs for easier management. Refactored 3 out of 4 most used and critical pages while guiding other developers.',
    'Improved data-leech pages by enhancing caching and visualization structures, reducing over 4000 lines of code to 1000 without sacrificing readability, while increasing performance and reducing render time from 600ms to less than 100ms'
];

const ceibaTechnologies = ['React - HTML/CSS', 'JavaScript', 'MobX', 'i18n', 'Victory Chart Library'];

const evetAchievements = [
    'Collaborated on the development of 4 different projects simultaneously with ReactJS and MobX which were used on Affiliate Network Industry.',
    'Worked on creating internal-use library with unit and e2e tests using Mocha and Cypress'
];

const evetTechnologies = ['React - HTML/CSS & Gatsby', 'MobX', 'i18n', 'Mocha & Cypress', 'Storybook'];
