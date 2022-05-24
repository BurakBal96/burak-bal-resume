import React from 'react';
import styles from './Resume.module.scss';
import { AiOutlineGithub, AiOutlineHome, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export const ResumeHeader = ({ ...props }) => {
    return (
        <div {...props} className={`${styles.header} sticky`}>
            <div className={styles.headerName}>
                <div>Burak BAL</div>
                <div data-testid='headerJobTitle'>{process.env.REACT_APP_FRONTEND_END ? 'Front-End Developer' : 'DevOps Engineer'}</div>
            </div>
            <div className={styles.headerInfo}>
                <div>
                    <span>Istanbul, Turkey</span>
                    <AiOutlineHome />
                </div>
                <div>
                    <span>+90 538 505 8239</span>
                    <AiOutlinePhone />
                </div>
                <a href='mailto: burakbal1296@gmail.com'>
                    <span>BurakBal1296@gmail.com</span>
                    <AiOutlineMail />
                </a>
                <a href='https://github.com/BurakBal96'>
                    <span>Github: /BurakBal96</span>
                    <AiOutlineGithub />
                </a>
                <a href='https://www.linkedin.com/in/burak-bal/'>
                    <span>LinkedIn: /in/burak-bal</span>
                    <AiOutlineLinkedin />
                </a>
            </div>
        </div>
    );
};
