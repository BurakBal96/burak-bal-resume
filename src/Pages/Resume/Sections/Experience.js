import React from 'react';
import { Section, Title, Entry, List } from '../Section';
import styles from '../Resume.module.scss';

export const Experience = () => {
    return (
        <Section>
            <Title id='experience'>Experience</Title>
            <ExperienceEntry
                firm='Ceiba Healthcare'
                position='Frontend Developer'
                date='05/21 - ...'
                achievements={ceibaAchievements}
                technologies={ceibaTechnologies}
            />
            <ExperienceEntry
                firm='Evet Technologies'
                position='Frontend Developer'
                date='03/20 - 04/21'
                achievements={evetAchievements}
                technologies={evetTechnologies}
            />
        </Section>
    );
};

const ExperienceEntry = ({ firm, position, date, achievements, technologies }) => {
    return (
        <Entry title={date}>
            <div className={styles.positionInformation}>
                <span>{firm}</span>
                <span>, {position}</span>
            </div>
            <div className='mb-2'>
                <b>Achievements:</b>
            </div>
            <List smallTextOnPrint smallText indent list={achievements} numberOfCols='1' />
            <div className='mb-2 mt-10'>
                <b>Technologies:</b>
            </div>
            <List smallTextOnPrint smallText indent list={technologies} />
        </Entry>
    );
};

const ceibaAchievements = [
    'Developed re-usable form components for constancy and easier development.',
    'Implemented global state management library MobX to apply better SOLID principles. With this enhancement, data models, backend request services and page rendering are separated.',
    'Css files converted into sass modules for preventing undesired css injections.',
    'Monolith codes are divided into minimal re-usable components. With this, 4000+lines of code have been reduced to like 1000 lines of code with much more manageable and performance efficient structure. With this improvements, we implemented better single responsibility principle and we could prevent unwanted performance reduces caused by other factors such as state change.',
    'Developed re-usable grid data table instead of HTML table. With this development, creating customizable tables and implementing windowing technologies became easier.',
    'Implemented victory chart library to display patient historical vital values came from monitoring devices on daily basis with one minute interval. With optimizations and downsampling, render time of thousands of data reduced 600ms to lower than 100ms.'
];

const ceibaTechnologies = ['JavaScript', 'MobX', 'Victory Chart Library', 'React - HTML & CSS', 'i18n'];

const evetAchievements = [
    'Collaborated on the development of projects created with React and MobX. This Affiliate Network oriented projects used by client and admin sides for examining user data',
    'Used the SEO-oriented Gatsby structure to make the branding home page project stand out in search engines compared to its competitors',
    'Collaborated on creating an appropriate library and Storybook structure in order to create components in reusable layout and to get rid of copy-paste logic in projects. Also implemented windowing and pagination structures for performance optimizations',
    'Elimination of UI/UX deficiencies in the project developed as a Search Monitoring Tool and creating a multi-language structure',
    'Since the projects run in different subdomains, caching and information transfer has been provided with the cookie and localstorage methods',
    'Writing e2e tests in appropriate scenarios using Mocha and Cypress',
    'Collaboration on multiple projects simultaneously with appropriate agile structure (admin and user sides of 4 different projects'
];

const evetTechnologies = ['JavaScript', 'MobX', 'i18n', 'Mocha & Cypress', 'React - HTML & CSS', 'Gatsby'];
