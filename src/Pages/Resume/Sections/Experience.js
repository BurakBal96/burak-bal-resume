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
                        <a>{process.env.REACT_APP_FRONTEND_RESUME ? 'https://burakbal.com' : 'https://burakbal.com'}</a>
                    </div>
                }
            >
                Experience
            </Title>
            <ExperienceEntry
                firm='Builder.ai'
                position='Frontend Developer'
                date={'07/22 - ...'}
                achievements={builderAiAchievements}
                technologies={builderAiTechnologies}
                technologiesCols={5}
            />

            <ExperienceEntry
                firm='Ceiba Healthcare'
                position='Frontend Developer'
                date={'05/21 - 07/22'}
                achievements={ceibaAchievements}
                technologies={ceibaTechnologies}
                technologiesCols={5}
            />
            <ExperienceEntry
                firm='Evet Technologies'
                position='Frontend Developer'
                date={'03/20 - 04/21'}
                achievements={evetAchievements}
                technologies={evetTechnologies}
                technologiesCols={5}
            />
        </Section>
    );
};

const ExperienceEntry = ({ firm, position, date, achievements, technologies, technologiesCols }) => {
    return (
        <Entry>
            <div className={styles.sectionEntryHeader}>
                <div className={styles.positionInformation}>
                    <span>{firm}</span>
                    <span>, {position}</span>
                </div>
                <div className={styles.sectionEntryHeaderDate}>{date}</div>
            </div>
            <div className='mb-2'>
                <b>Achievements:</b>
            </div>
            <List smallTextOnPrint smallText indent list={achievements} numberOfCols='1' />
            <div className='mb-2 mt-10'>
                <b>Technologies:</b>
            </div>
            <List smallTextOnPrint smallText indent list={technologies} numberOfCols={technologiesCols} />
        </Entry>
    );
};

const builderAiAchievements = [
    'Worked on fast-paced ecommerce and elearning projects with 3 months of delivery time as a contractor which uses ReactJS and Material UI. Also worked with internally developed block based pages like micro-frontend structure.',
    'For future development process, I created components that are used by other developers as well as other projects and also worked on optimizing the code structure to be more maintainable and reusable.',
    'Reviewed and improved the code quality of other developers and also guided them to apply better solutions.',
    'Wrote unit tests and integration tests which has at least 80% coverage.'
];

const builderAiTechnologies = ['React - HTML/CSS', 'Jest', 'TypeScript', 'Material UI'];

const ceibaAchievements = [
    'Developed re-usable components from scratch for consistency, easier development, better customization and performance such as form components, dynamic data grid, filter panel, calendar, lazy load and etc.',
    'Implemented global state management library MobX to apply better SOLID principles. With this enhancement, data models, backend request services, page rendering and configuration of pages are separated.',
    'Refactored 3 out of 4 most used and critical pages of the application. While doing this, guided other developers to apply best practices and to improve their code quality.',
    'Monolith codes are divided into minimal re-usable components. With this, 4000+lines of code have been reduced to like 1000 lines of code with much more manageable and performance efficient structure.',
    'Implemented victory chart library to display patient historical vital values comes from monitoring devices on daily basis with one minute interval. With optimizations and downsampling, render time of thousands of data reduced 600ms to lower than 100ms.'
];

const ceibaTechnologies = ['React - HTML/CSS', 'JavaScript', 'MobX', 'i18n', 'Victory Chart Library'];

const evetAchievements = [
    'Collaborated on the development of 4 different projects simultaneously with ReactJS and MobX which were used on Affiliate Network Industry.',
    'Worked on creating re-usable components such as form inputs, tables and search input can support thousands of options with render time less than one ms with windowing techniques.',
    'Collaborated on creating private npm library for better versioning, component reusability and backward compatibility. Also added Storybook structure to serve these components standalone on isolated environment for easier testing and documentation.',
    'Wrote e2e tests in appropriate scenarios using Mocha and Cypress.',
    'Since the projects run in different subdomains; caching and information transfer has been provided with the cookie and localstorage methods.'
];

const evetTechnologies = ['React - HTML/CSS', 'MobX', 'i18n', 'Gatsby', 'Mocha & Cypress', 'JavaScript', 'Storybook'];
