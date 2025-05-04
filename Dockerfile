# Use the official Node.js image as the base
FROM node:18-alpine AS base

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first, and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy all application files
COPY . .

# Build the Next.js app
RUN npm run build

# Set the startup command
CMD ["npm", "start"]

# Expose the default Next.js port
EXPOSE 3000