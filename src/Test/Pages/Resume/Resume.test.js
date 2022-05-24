import { render } from '@testing-library/react';
import { Resume } from '../../../Pages';
import { expectElementById, expectElementText } from '../../Utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Resume Page Tests', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
        jest.resetModules(); // Most important - it clears the cache
        process.env = { ...OLD_ENV }; // Make a copy
    });

    afterAll(() => {
        process.env = {...OLD_ENV}; // Restore old environment
    });

    test('render default resume page layout correctly', () => {
        render(
            <Router>
                <Resume />
            </Router>
        );
        //default sections
        expectElementById('resumeHeader');
        expectElementById('education');
        expectElementById('frontendSkills');
        expectElementById('languages');
        expectElementById('experience');
    });

    test('Render environment specific sections - frontend', () => {
        process.env.REACT_APP_FRONTEND_END = '1';
        render(
            <Router>
                <Resume />
            </Router>
        );
        // pages must be shown
        expectElementById('summaryFrontend');

        // pages must be hidden
        expectElementById('summaryDevops',0);
        expectElementById('devopsSkills',0);

        expectElementText('headerJobTitle', 'Front-End Developer');
    });

    test('Render environment specific sections - devops', () => {
        process.env.REACT_APP_FRONTEND_END='';
        render(
            <Router>
                <Resume />
            </Router>
        );
        // pages must be shown
        expectElementById('summaryDevops');
        expectElementById('devopsSkills');

        // pages must be hidden
        expectElementById('summaryFrontend',0);

        expectElementText('headerJobTitle', 'DevOps Engineer');
    });
});
