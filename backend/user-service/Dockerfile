# Dockerfile

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
EXPOSE 3000

# Command to run the application
CMD ["node", "src/index.js"]
