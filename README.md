# NODE MONGO EXPRESS MOCHA  STARTER PROJECT

This is a starter project

## ✔️ Requirements

Node (versions `16.X.X` are tested,  other versions _might_ not work ) and npm. 

## 🚀 Getting started

1. Clone this repository and run `npm install` in the directory

2.  Create a file `.env`  and copy the contents of the `.env.template` file there. In the `.env` file, replace the value of the environment variables accordingly.

4. Run `npm run build`. This will setup the MongoDB  database and run the migrations.

5. **(Optional)** To populate the database with some seed data you can run `npm run seed:run`. **Note:** running this command will remove all existing data.

6. All done! Just run `npm start` to start the server. 

## 🐛 Found a bug?

Submit an issue with the bug description and a way to reproduce the bug. If you have already come up with a solution, we will gladly accept a pull request.

## ❓ FAQ

- **How to reset the database?** If you are absolutely sure that you want to remove _all_ the existing data, just remove the `database.sqlite` file in the `rate-repository-api` directory and run `npm run build`. You can run `npm run seed:run` to initialize the new database with seed data.

