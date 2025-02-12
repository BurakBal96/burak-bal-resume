import React, { useRef } from 'react';
import styles from './Resume.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { VscCircle } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

export const SectionWrapper = (props) => {
    return <div {...props} className={styles.sectionWrapper} />;
};

export const Section = ({ className = '', ...props }) => {
    return <div {...props} className={`${styles.section} ${className}`} />;
};

export const Title = ({ children, id, rightText, ...props }) => {
    const location = useLocation();
    const highlight = location.hash === '#' + id;

    return (
        <>
            <div className={`${styles.sectionTitle}`} {...props} id={id}>
                <span className={highlight ? styles.sectionTitleHighlight : ''}>{children}</span>
                <div className={styles.sectionTitleRight}>{rightText}</div>
            </div>
            <div className={`${styles.sectionBorder} `} />
        </>
    );
};

export const Entry = ({ children, className = '' }) => {
    return (
        <div className={styles.sectionEntry}>
            <div className={`${styles.sectionEntryContent} ${className}`}>{children}</div>
        </div>
    );
};

export const List = ({ list = [], numberOfCols = 1, indent = false, smallTextOnPrint = false, narrow = false }) => {
    const uuid = useRef(uuidv4());
    const classNames = [styles.sectionList];
    if (indent) classNames.push(styles.sectionListIndent);
    if (smallTextOnPrint) classNames.push('small-text-on-print');
    if (narrow) classNames.push(styles.sectionListNarrow);

    return (
        <div className={classNames.join(' ')} style={{ '--number-of-cols': numberOfCols }}>
            {list.map((i, index) => (
                <div className={styles.sectionListItem} key={`${uuid}-${index}`}>
                    <div className={styles.sectionListItemIcon}>
                        <VscCircle />
                    </div>
                    <span>{i}</span>
                </div>
            ))}
        </div>
    );
};
