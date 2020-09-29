FROM library/node:alpine

WORKDIR /application

COPY ./ /application

RUN cd /application && npm install

EXPOSE 80

CMD ["npm", "start"]
