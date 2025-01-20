import React from 'react';
import { Section, Title, Entry, List } from '../Section';

const list = [
    'React, JavaScript/TypeScript, MaterialUI, HTML/CSS, Sass/Scss, Figma',
    'Cloud on AWS/GCP/Azure, Testing with Jest/Selenium/SonarQube',
    'Git/CI/CD/Docker/Kubernetes/Jenkins, Storybook'
].flat();

export const FrontendSkills = ({ ...props }) => {
    return (
        <Section {...props}>
            <Title id='skills'>Skills</Title>
            <Entry>
                <List list={list} narrow />
            </Entry>
        </Section>
    );
};
