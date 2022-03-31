FROM nexuscoe.rjil.ril.com:5115/jioent/health/jio-node-base:14-slim

ARG PROXY_HTTP
ARG PROXY_HTTPS
ENV http_proxy $PROXY_HTTP
ENV https_proxy $PROXY_HTTPS

ADD . /usr/src/app
WORKDIR /usr/src/app

RUN npm config set http-proxy $PROXY_HTTP
RUN npm config set https-proxy $PROXY_HTTP

RUN npm install


RUN npm config rm http-proxy
RUN npm config rm https-proxy
ENV http_proxy ""
ENV https_proxy ""

EXPOSE 7000
CMD ["node","./bin/www"]
# FROM  nexuscoe.rjil.ril.com:5115/jioent/health/jio-node-base:10.20.1-jessie as builder

# WORKDIR /usr/src/app

# ARG PROXY_HTTP
# ARG PROXY_HTTPS
# ARG PROXY_NO
# ARG BUILD_ENV
# ARG PUBLIC_URL
# ARG NETWORK_HELPER_VERSION


# ENV http_proxy $PROXY_HTTP
# ENV https_proxy $PROXY_HTTP
# ENV noproxy $PROXY_NO
# ENV PUBLIC_URL $PUBLIC_URL


# RUN npm cache clean --force
# RUN npm config set http-proxy $PROXY_HTTP
# RUN npm config set https-proxy $PROXY_HTTP
# RUN npm config set noproxy $PROXY_NO

# COPY package.json .npmrc /usr/src/app/
# RUN npm install --production=true

# ADD . /usr/src/app

# # RUN node pre_build.js $BUILD_ENV
# RUN npm run-script start

# RUN npm config rm noproxy
# RUN npm config rm proxy 
# RUN npm config rm https-proxy
# ENV noproxy ""
# ENV http_proxy ""
# ENV https_proxy ""

# EXPOSE 8000
# ENTRYPOINT ["node", "bin/www"]
