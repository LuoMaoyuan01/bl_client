FROM node:alpine
 
WORKDIR /bl_client

COPY . .

RUN npm install
 
EXPOSE 3000

CMD ["npm", "start"]