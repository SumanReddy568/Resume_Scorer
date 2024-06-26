# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Bundle app source
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to run your app using node with server.js
CMD ["npm", "start"]

