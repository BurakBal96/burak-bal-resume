import React from 'react';
import styles from './Layout.module.scss';
import { Button, ButtonStyles } from '../';
import { HashLink } from 'react-router-hash-link';

const ButtonClasses = `${ButtonStyles.buttonLight} ${ButtonStyles.buttonUnderline} ${ButtonStyles.buttonTertiary}`;
const scroll = (e) => {
    e.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const Header = () => {
    return (
        <header className={`${styles.header} no-print`}>
            <div className={styles.headerLeft} />
            <div className={styles.headerCenter} />
            <div className={styles.headerRight}>
                <HashLink to='/#summary' scroll={scroll}>
                    <Button className={ButtonClasses}>About Me</Button>
                </HashLink>
                <HashLink to='/#skills' scroll={scroll}>
                    <Button className={ButtonClasses}>Skills</Button>
                </HashLink>

                <HashLink to='/#experience' scroll={scroll}>
                    <Button className={ButtonClasses}>Experience</Button>
                </HashLink>
            </div>
        </header>
    );
};
