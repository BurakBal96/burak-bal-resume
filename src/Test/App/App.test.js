import { render } from '@testing-library/react';
import { App } from '../../App';
import { expectElementById } from '../Utils';

test('render layout correctly', () => {
    render(<App />);
    expectElementById('layout');
    expectElementById('pageHeader');
    expectElementById('pageFooter');
    expectElementById('pageWrapper');
    expectElementById('page');
});
