import React from 'react';
import { Section } from '../Section';
import { SectionText } from '../SectionText';
import { SectionCode } from '../SectionCode';

export const Jenkins = () => {
    return (
        <Section header='Jenkins'>
            <SectionText>
                My Jenkins server serves on VPS, inside a docker container. This server also can be served under kubernetes cluster but I
                already had this VPS on hold and wanted to separate the Jenkins server from other services.
            </SectionText>
            <SectionText>
                For installation of Jenkins server, I followed their documentation. (
                <a href='https://github.com/jenkinsci/docker/blob/master/README.md' target='_blank' rel='noreferrer'>
                    Official Jenkins Github Repo
                </a>
                )
            </SectionText>
            <SectionCode summary='Docker in Docker installation script, required for jenkins'>{dindStartCode}</SectionCode>
            <SectionCode summary='Custom Dockerfile for Jenkins Server'>{dockerFile}</SectionCode>
            <SectionCode summary='Installation script of jenkins'>{jenkinsStartCode}</SectionCode>
            <SectionCode summary='Jenkins Initialization'>{jenkinsInit}</SectionCode>
        </Section>
    );
};

const dindStartCode = `docker network create jenkins #create network for jenkins to create its own docker images inside agents (Docker in Docker)
docker container run \\
    --name jenkins-dind \`#name of container\`\\
    --restart always \`#restart jenkins server when computer reboot or sth\`\\
    --detach \`#start as background process\`\\
    --privileged \\
    --network jenkins \`#network for jenkins\`\\
    --network-alias docker \\
    --env DOCKER_TLS_CERTDIR=/certs \\
    --volume jenkins-docker-certs:/certs/client \\
    --volume jenkins-data:/var/jenkins_home \\
    --volume "$HOME":/home \\
    --publish 2376:2376 \\
    docker:dind #image name
`;

const dockerFile = `export DOCKER_IMAGE_NAME=jenkins-server:1.0 #export name of docker image as variable
echo 'FROM jenkins/jenkins:2.319.2-jdk11
USER root
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \\
    https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \\
    signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \\
    https://download.docker.com/linux/debian \\
    $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean:1.25.2 docker-workflow:1.27"' > Dockerfile
docker build -t \${DOCKER_IMAGE_NAME} . #name of jenkins server image, last point means Dockerfile inside current folder
docker image ls #check is image exist
`;

const jenkinsStartCode = `docker run \\
    --name jenkins-blueocean \`#name of container\`\\
    --restart always \`#restart jenkins server when computer reboot or sth\`\\
    --detach \`#start as background process\`\\
    --network jenkins \`#network for jenkins, this is required for dind\`\\
    --env DOCKER_HOST=tcp://docker:2376 \`#dind port\`\\
    --env DOCKER_CERT_PATH=/certs/client \\
    --env DOCKER_TLS_VERIFY=1 \\
    --volume "$HOME":/home \\
    --volume jenkins-data:/var/jenkins_home \`#persist data\`\\
    --volume jenkins-docker-certs:/certs/client:ro \\
    --publish 49000:8080 \`#jenkins server access port\`\\
    --publish 50000:50000 \\
    \${DOCKER_IMAGE_NAME} \`#image name from previous Dockerfile\`
`;

const jenkinsInit = `#open 49000 port to public access via 'sudo firewall-cmd --permanent --zone=public --add-port=49000/tcp' command or cloud security settings
docker exec -it jenkins-blueocean bash
cat /var/jenkins_home/secrets/initialAdminPassword #initial password of jenkins server
#access jenkins server web gui via public_ip:49000, paste password
#then install plugins and create admin account
#install 'Docker Commons Plugin' and 'Docker Pipeline' plugins for further usage
#add docker tool to use Manage Jenkins > Global Tool Configuration > Docker / Add Docker > name it 'docker'
#add git access token to credentials, create new pipeline item with 'Poll SCM' and '* * * * *' kron scheduler
#check details of this website's source code if you want more information about usage
#      [Github Repository](https://github.com/BurakBal96/burak-bal-resume)
`;
