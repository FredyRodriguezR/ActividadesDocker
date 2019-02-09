FROM node:11.9.0
ARG USER_ID
RUN apt-get update && apt-get install -y sudo

RUN export uid=$USER_ID && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:0:developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:0 -R /home/developer
RUN npm install 
RUN npm install react-scripts@2.1.3 -g 
USER developer
WORKDIR /client