import React from 'react';
import { SectionText } from '../SectionText';
import styles from '../AboutWebsite.module.scss';
import { Section } from '../Section';

export const Technologies = () => {
    return (
        <Section header='Technology Stack'>
            <SectionText className={styles.text}>
                <b>Docker</b>, <b>Jenkins</b>, <b>Kubernetes</b>, <b>kOps</b> and <b>AWS cloud</b> used for this website.
            </SectionText>
            <SectionText>
                For serving of website, I used <b>NGINX</b> with certbot automatic SSL certificate and reverse proxy to deployed kubernetes
                services.
            </SectionText>
        </Section>
    );
};
