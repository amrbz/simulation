FROM ubuntu:trusty

RUN mkdir /opt/web
WORKDIR /opt/web

RUN apt-get -qq update
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# RUN npm init
# RUN npm install -y --save next react react-dom

COPY ./package.json /opt/web
# CMD [ "npm run dev" ]

EXPOSE 3000
