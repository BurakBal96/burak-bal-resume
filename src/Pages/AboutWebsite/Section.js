import React, { useEffect, useState } from 'react';
import styles from './AboutWebsite.module.scss';
import { useMeasure, useSize } from 'react-use';

export const Section = ({ header, children }) => {
    const [ref, { height }] = useMeasure();
    const [heightMax, setHeightMax] = useState(0);

    useEffect(() => {
        if (height > heightMax) {
            setHeightMax(height);
        }
    }, [height]);

    const [sizedSummary, { height: heightSummary }] = useSize(() => <summary className={styles.sectionHeader}>{header}</summary>);

    return (
        <details
            className={styles.section}
            open
            ref={ref}
            style={{
                '--accordion-max-height': heightMax > heightSummary && `${heightMax}px`,
                '--accordion-min-height': heightMax > heightSummary && `${heightSummary}px`
            }}
        >
            {sizedSummary}
            <div className={styles.sectionContent}>{children}</div>
        </details>
    );
};
