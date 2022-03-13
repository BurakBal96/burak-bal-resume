import React, { useRef } from 'react';
import styles from './Resume.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { VscCircleOutline } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

export const SectionWrapper = (props) => {
    return <div {...props} className={styles.sectionWrapper} />;
};

export const Section = ({ className = '', ...props }) => {
    return <div {...props} className={`${styles.section} ${className}`} />;
};

export const Title = ({ children, id, ...props }) => {
    const location = useLocation();
    const highlight = location.hash === '#' + id;

    return (
        <>
            <div className={`${styles.sectionTitle}`} {...props} id={id}>
                <span className={highlight ? styles.sectionTitleHighlight : ''}>{children}</span>
            </div>
            <div className={`${styles.sectionBorder} `} />
        </>
    );
};

export const Entry = ({ children, className = '', title = '' }) => {
    return (
        <>
            <div className={styles.sectionEntryTitle}>{title}</div>
            <div className={`${styles.sectionEntryContent} ${className}`}>{children}</div>
        </>
    );
};

export const List = ({ list = [], numberOfCols = 3, indent = false, smallTextOnPrint = false, smallText = false }) => {
    const uuid = useRef(uuidv4());
    const classNames = [styles.sectionList];
    if (indent) classNames.push(styles.sectionListIndent);
    if (smallTextOnPrint) classNames.push('small-text-on-print');
    if (smallText) classNames.push(styles.smallText);

    return (
        <div className={classNames.join(' ')} style={{ '--number-of-cols': numberOfCols }}>
            {list.map((i, index) => (
                <div className={styles.sectionListItem} key={`${uuid}-${index}`}>
                    <div className={styles.sectionListItemIcon}>
                        <VscCircleOutline />
                    </div>
                    <span>{i}</span>
                </div>
            ))}
        </div>
    );
};
