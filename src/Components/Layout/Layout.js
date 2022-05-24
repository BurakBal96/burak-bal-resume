import React from 'react';
import { Header } from './Header';
import { Page } from './Page';
import { Footer } from './Footer';
import styles from './Layout.module.scss';

export const Layout = ({ children, ...props }) => {
    return (
        <div className={styles.layout} data-testid='layout'>
            <Header />
            <div className={styles.pageWrapper} data-testid='pageWrapper'>
                <Page {...props}>{children}</Page>
                <Footer />
            </div>
        </div>
    );
};
