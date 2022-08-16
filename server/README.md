<h3 align="center">Express Server API</h3>

#### 📕 Info

For the server, we have an **Express API** running with a **Mongoose** database.

#### Table Of Contents

📌 [0. Structure](#Structure)<br>
📌 [1. Requirements](#1-Requirements)<br>
📌 [2. Install Dependencies](#2-Install-Dependencies)<br>
📌 [3. Start Server](#1-Start-Server)<br>
📌 [4. Migrate Seed to Database](#1-Migrate-Seed-to-Database)<br>

### 1. Structure

The code is split into:

- 📄 index.ts
  - The starting point of the application.
- 📄 env.ts
  - Here are called all the environment variables, written in **.env**.
- 📁 seed
  - This is where the data for the application is stored. With a _script_ from the **package.json**, all the data is migrated to **MongoDB**.
- 📁 models
  - The folder contains all the models for the database. Each model has an **Interface**.
- 📁 interfaces
  - Stores interfaces for **models** and **view models**.
- 📁 services
  - Each service makes a call to the **database** and returns information as an array.
- 📁 controllers
  - Invokes needed service, and validates the output to be present as a JSON.
- 📁 routes
  - This is where all the API routes are stored. If the app is in **production** mode, the last route will point to the client **build folder** and connect the two projects.
- 📁 middlewares
  - Checks if the requester has a user or admin token.
- 📁 configs
  - Stores **configuration** files
- 📁 utils
  - Stores **utility** files.

### 1. Requirements

| Name        | Version               |
| ----------- | --------------------- |
| Node        | >=14.17.1             |
| NPM or Yarn | >=6.14.13 / >=1.22.19 |

### 2. Install Dependencies

```shell
npm install or yarn install
```

Be sure to create **.env** file similar to **.env.example** and write your configuration.

### 3. Start Server

For **Development** start with:

```shell
npm run dev OR yarn run dev
```

For **Production** start with:

```shell
npm run prod OR yarn run prod
```

### 4. Migrate Seed to Database

- To have a database with the data from the JSONs write:

For **Development** start with:

```shell
npm run migration-dev OR yarn run migration-dev
```

For **Production** start with:

```shell
npm run migration-prod OR yarn run migration-prod
```
