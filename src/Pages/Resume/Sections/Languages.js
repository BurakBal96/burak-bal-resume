import React from 'react';
import { Section, Entry, List, Title } from '../Section';
const list = ['Turkish - Native', 'English - C1 Level of Certificate'];

export const Languages = () => {
    return (
        <Section>
            <Title id='languages'>Languages</Title>
            <Entry>
                <List list={list} numberOfCols='1' />
            </Entry>
        </Section>
    );
};
