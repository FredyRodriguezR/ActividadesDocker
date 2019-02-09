FROM node:8.11.1
ARG USER_ID
RUN apt-get update && apt-get install -y sudo

RUN export uid=$USER_ID && \
    mkdir -p /home/developer && \
    echo "developer:x:${uid}:0:developer,,,:/home/developer:/bin/bash" >> /etc/passwd && \
    echo "developer:x:${uid}:" >> /etc/group && \
    echo "developer ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/developer && \
    chmod 0440 /etc/sudoers.d/developer && \
    chown ${uid}:0 -R /home/developer
RUN npm install -g sequelize-auto
RUN npm install -g pg@6.4.1 pg-hstore 
RUN npm install -g nodemon
USER developer
WORKDIR /app