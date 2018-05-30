FROM ubuntu

RUN mkdir /opt/web
WORKDIR /opt/web
RUN apt-get update

RUN apt-get install -y tar git curl nano wget dialog net-tools build-essential
RUN apt-get install -y python python-dev python-distribute python-pip
RUN apt-get update

RUN pip install --upgrade pip
COPY requirements.txt /opt/web
RUN pip install -r requirements.txt

# RUN apt-get update
# RUN apt-get install tar wget
# RUN wget https://dist.ipfs.io/go-ipfs/v0.4.14/go-ipfs_v0.4.14_linux-amd64.tar.gz
# RUN tar xfv go-ipfs_v0.4.14_linux-amd64.tar.gz
# RUN cp go-ipfs/ipfs /usr/local/bin/
# RUN ipfs init

# ADD . /opt/web

ENV FLASK_CONFIG development

EXPOSE 80

CMD  python server.py
