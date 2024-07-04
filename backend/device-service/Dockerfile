# backend/device-service/Dockerfile

# Use a Node.js base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install



# Copy rest of the application code
COPY . .

# Expose port
EXPOSE 3002

# Command to run the application
CMD ["npm", "start"]
