# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the application code into the container
COPY . .

# Install dependencies
RUN npm install

# Expose the port that the application listens on
EXPOSE 3000

# Set the default command to start the application
CMD ["npm","run", "dev"]