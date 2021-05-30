FROM node:14
#FROM billyfong2007/node-face-recognition:last

# Create app directory
WORKDIR /usr/src/app
COPY app/package.json ./

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#COPY package*.json ./

RUN npm install
#RUN npm run-script build
#RUN npm audit fix --force
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY app .

EXPOSE 3011
#CMD [ "node", "index.js" ]
CMD ["npm", "start" ]