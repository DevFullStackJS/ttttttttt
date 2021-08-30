FROM node:14.17.5
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "web"]
