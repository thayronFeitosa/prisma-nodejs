ARG IMG_DB_VERSION=14.0-bullseye
FROM postgres:${IMG_DB_VERSION}

LABEL MAINTAINER="Ton Gomes"

## ARGs
ARG DOCKERIZER_USER_ID=1000
ARG DOCKERIZER_GROUP_ID=1000
ARG DOCKERIZER_USER=dockerizer

## Set ENV variables
ENV TZ America/Sao_Paulo
ENV DEBIAN_FRONTEND noninteractive

## Timezone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 5432

## Clear APT cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

## Create container default user named dockerizer
RUN usermod -u ${DOCKERIZER_USER_ID} postgres
RUN groupmod -g ${DOCKERIZER_GROUP_ID} postgres
