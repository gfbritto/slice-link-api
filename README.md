
# Slice link - API

## Overview

This is a URL shortening API developed in TypeScript, using Yarn as the package manager. It allows you to shorten long URLs into more manageable and shareable links.

## Features

- Shorten long URLs into compact links.
- Redirect users to the original URL when they access the shortened link.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- Yarn package manager installed.
- TypeScript knowledge.

### Installation

1. Clone the repository:

2. Install dependencies:

```sh
yarn install
```

3. Configure your environment variables in a `.env` file.

4. Build and run the application:

```sh
yarn dev
```

## Deploy

```sh
yarn build
yarn start
```

### Using Docker for Development (Optional)

You can also run the application using Docker for development. Ensure that you have Docker and Docker Compose installed on your system.

1. Clone the repository:

2. Create a `.env` file with your environment variables, if you haven't already.

3. Build and start the application using Docker Compose:

```sh
docker-compose up
```

This will build the Docker image and start the application in a container.

## Usage

To use the URL shortening API, make HTTP requests to the provided endpoints.
