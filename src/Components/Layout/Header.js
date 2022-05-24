import React from 'react';
import styles from './Layout.module.scss';
import { Button, ButtonStyles } from '../';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const ButtonClasses = `${ButtonStyles.buttonLight} ${ButtonStyles.buttonUnderline} ${ButtonStyles.buttonTertiary}`;
const scroll = (e) => {
    e.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export const Header = () => {
    return (
        <header className={`${styles.header} no-print`} data-testid='pageHeader'>
            <div className={styles.headerLeft}>
                <HashLink to='/#summary' scroll={scroll}>
                    <AiOutlineHome className={styles.homeButton}/>
                </HashLink>
            </div>
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
                <Link to='/aboutWebsite'>
                    <Button className={ButtonClasses}>About this Website</Button>
                </Link>
            </div>
        </header>
    );
};
