import { screen } from '@testing-library/react';

export const expectElementById = (id, count = 1) => {
    const elements = screen.queryAllByTestId(id);
    expect(elements).toHaveLength(count);
};

export const expectElementText = (id, text) => {
    const element = screen.getByTestId(id);
    expect(element).toHaveTextContent(text);
};
