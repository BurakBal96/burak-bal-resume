import React from 'react';
import { SectionCode } from '../SectionCode';
import { Section } from '../Section';

export const Docker = () => {
    return (
        <Section header='Docker'>
            <SectionCode summary='Docker install on CentOS'>{dockerCEInstall}</SectionCode>
        </Section>
    );
};

const dockerCEInstall = `sudo yum install -y yum-utils #install utils first
sudo yum-config-manager \`#add docker repo to yum configs\`\\
    --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    
sudo yum install docker-ce docker-ce-cli containerd.io #install docker ce & cli
sudo systemctl enable docker #let docker autorun after reboot and etc.
sudo systemctl start docker #start docker daemon service
docker --version #check is docker installed successfully
`;
