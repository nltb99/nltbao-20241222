# Base image for Node.js
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the rest of the application
COPY . .

# Build the Next.js application using Yarn
RUN yarn build

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js application using Yarn
CMD ["yarn", "dev"]
