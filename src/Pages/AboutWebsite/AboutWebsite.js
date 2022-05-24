import React from 'react';
import styles from './AboutWebsite.module.scss';
import { Purpose, Docker, Technologies, Jenkins } from './Sections';

export const AboutWebsite = () => {
    return (
        <div className={styles.aboutPage}>
            <div className={styles.sections}>
                <Purpose />
                <Technologies />
                <Docker />
                <Jenkins />
                {/*<Kubectl />*/}
                {/*<Aws />*/}
                {/*<Kops />*/}
            </div>
        </div>
    );
};
