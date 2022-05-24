import React, { useEffect, useRef } from 'react';
import styles from './AboutWebsite.module.scss';
import Prism from 'prismjs';

export const SectionCode = ({ summary = 'summary', language = 'bash', children }) => {
    const ref = useRef(null);

    useEffect(() => {
        Prism.highlightAllUnder(ref.current);
    }, [ref, ref.current]);

    return (
        <details open className={styles.code} ref={ref}>
            <summary>{summary}</summary>
            <hr />

            <pre className={'code-toolbar '} ref={ref}>
                <code className={'language-' + language} data-prismjs-copy='Copy'>{`${children || ''}`}</code>
            </pre>
        </details>
        // available classes: line-numbers
    );
};
