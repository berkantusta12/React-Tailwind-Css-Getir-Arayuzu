FROM node:15.13-alpine
WORKDIR /intro
ENV PATH="./node_modules/.bin:$PATH"
COPY . . 
RUN npm run build
CMD ["npm", "start"]


   
   
   
#     1  apt-get update
#     3  apt-get install curl -y
#     4  curl sL https://deb.nodesource.com/setup10.x | bash
#     7  apt-get install nodejs -y
#     9  cd opt
#    11  mkdir node-app
#    12  cd node-app
#    16  echo 'console.log("nodejsapp from ubuntu...");' > app.js
#    18  cat app.js
#    19  node app.js
