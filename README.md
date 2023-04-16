## Description

This code has two different use-cases. The first one involves adding a new city to a database and updating its details based on the city name.

The second use-case involves checking a website's status every two minutes. For this purpose, the cron scheduler has been used. If the website is down, the database will be updated with a status of 0. On the other hand, if the website's health is good, the database will be updated with a status of 1.

## Database

To begin with, import the database named "llc_test.sql". Once the database is imported, install the required packages.

## Postman Collection

For accessing the APIs, a Postman collection has been created. The link to this collection is available at https://documenter.getpostman.com/view/17597844/2s93XyTNVQ. You can use this collection to test and interact with the APIs.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Environment Variable

I have provided a .env file along with the code. This file does not contain any sensitive information, so you can go through it and modify the configurations as per your database settings.
