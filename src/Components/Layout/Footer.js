import React from 'react';
import styles from './Layout.module.scss';

const packageJSON = require('../../../package.json');

export const Footer = () => {
    return (
        <footer className={`${styles.footer} no-print`} data-testid='pageFooter'>
            <div className={styles.footerLeft} />
            <div className={styles.footerRight}>
                <span>Version: {packageJSON.version}</span>
                <a href='https://cloud.burakbal.tk'>Cloud</a>
                <a href='https://vpn.burakbal.tk'>Vpn</a>
                <a href='https://jenkins.burakbal.tk'>Jenkins</a>
            </div>
        </footer>
    );
};
