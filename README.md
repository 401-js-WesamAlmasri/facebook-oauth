# bearer-auth

## Author: Wesam Al-Masri

A simple API server with basic and bearer authentication system to register a user and login and Facebook Oauth system.

- [Submission Pull Request](https://github.com/401-js-WesamAlmasri/
facebook-oauth/pull/1)
- [Tests](https://github.com/401-js-WesamAlmasri/
facebook-oauth/actions/)
- [Deployed url](https://fb-oauth-api.herokuapp.com//)

## Setup

`.env Requierments`

- `PORT` - port number
- `MONGODB_URI` - mongodb connection string
- `SECRET` - api secret key
- `CLIENT_ID` - Facebook api app id
- `CLIENT_SECRET` - Facebook api secret key

## Running the app

1. clone the repo.
2. Enter the command `npm start`
3. Endpoints
   - Home Page `/`
     - methof: GET
       - Sign in using facebook
     - response: JSON

```json
{
"user": {
    "_id": "60abdbdadef86b8f8e097584",
    "username": "wesamm",
    "password": "$2b$10$LEgyN87IUgyalZs2AqxVUO97kwppgVYaYGtg2CTIFKx8bZFuRoROO",
    "__v": 0
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indlc2FtbSIsImlhdCI6MTYyMTg3NTY3NCwiZXhwIjoxNjIxODc2NTc0fQ.lie2bnZAjbo1LVMCuCWBBfXsgbE6z_v9vmQHWHFeuGE"

}
         ```

   - Auth endpoint`/signup`
       - method : POST
          - create a new user
       - response: JSON

```json
{
"user": {
    "_id": "60abdbdadef86b8f8e097584",
    "username": "wesamm",
    "password": "$2b$10$LEgyN87IUgyalZs2AqxVUO97kwppgVYaYGtg2CTIFKx8bZFuRoROO",
    "__v": 0
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indlc2FtbSIsImlhdCI6MTYyMTg3NTY3NCwiZXhwIjoxNjIxODc2NTc0fQ.lie2bnZAjbo1LVMCuCWBBfXsgbE6z_v9vmQHWHFeuGE"

}
         ```

- Auth endpoint`/signin`
  - method : POST
    - login in with certian user
  - Respons: JSON

```json
{
"user": {
    "_id": "60abdbdadef86b8f8e097584",
    "username": "wesamm",
    "password": "$2b$10$LEgyN87IUgyalZs2AqxVUO97kwppgVYaYGtg2CTIFKx8bZFuRoROO",
    "__v": 0
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Indlc2FtbSIsImlhdCI6MTYyMTg3NTczNCwiZXhwIjoxNjIxODc2NjM0fQ._NJRpC_VMSC6TbyfOW7MUlAfJehoDzwiWsdwny7d65Q"
}
```

- Endpoint`/users`
  - method : GET
    - get all users
  - Respons: JSON

```json
[
"wesam",
"waseem",
"wesamm",
...
]
```

    - Endpoint`/secret`
  - method : GET
    - Welcome message to secret stuff
  - Respons: JSON

```
Welcome to the secret area!
```

1. Test

   - Unit Tests: run the command `npm run test`

## UML

![UML](assets/uml.jpeg)
