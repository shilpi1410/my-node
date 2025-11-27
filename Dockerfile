# Use official lightweight Node.js image
FROM node:18-alpine

# Create app directory inside container
WORKDIR /usr/src/app

# Copy files into the container
COPY . .

# Expose the port your Node app uses
EXPOSE 4000

# Command to start your app
CMD ["node", "hello-web.js"]

