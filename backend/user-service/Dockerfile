# backend/user-service/Dockerfile

# Use a Node.js base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g nodemon



# Copy rest of the application code
COPY . .

# Expose port
EXPOSE 3001

# Command to run the application
CMD ["npm", "start"]
