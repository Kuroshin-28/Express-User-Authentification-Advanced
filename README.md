This repo is used for Wild Code School Express quests

# Setup

## Install dependencies
```sh
npm i
```
## Create your environment variables

Create a copy of the `.env.sample` file named `.env` : 

```
cp .env.sample .env
```

Then adjust variables in `.env` to match your own environment.

# Run the app

When developping, to automatically restart the server on file changes : 

```sh
npm run dev
```

If you don't need automatic reloadings, you can just : 

```sh
npm start
```

# Postman request

How to make register request :

    Select POST option on Postman
    Enter the path to the corresponding url :
        `http://localhost:"YOUR_PORT"/api/users`
    Complete the body to make your request (we recommend using the JSON format) :

    # All the following variable are mandatories to register a new user :
        - firstanme
        - lastname
        - email
        - password (not hashedPassword)

    # The other variable are optionals (it's up to you) :
        - city
        - language

How to check if you can login or not :

    Select POST option on Postman
    Enter the path to the corresponding url :
        `http://localhost:"YOUR_PORT"/api/auth/checkCredentials`
    Complete the body to make your request (we recommend using the JSON format)

    # The only variable you need to pass are :
        - email
        - password (not hashedPassword)

Restriction to create a new movie in the DB :

/!\ You need to be connected in the first place /!\

    Select POST option on Postman
    Enter the relative informations needed
    Since you're registered and logged in, user_id is automatically determined with the cookie