# nodeAPIStarter
[![Build Status](https://travis-ci.org/wordyallen/nodeAPIStarter.svg?branch=master)](https://travis-ci.org/wordyallen/nodeAPIStarter)

## Prereqs
- [ ] Get mongodb
-  [ ] Get httpie (for windows users)

  - get choco:
    ```sh
    @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
    ```
  - get python2
  ```sh
  choco install python2
  ```
  - get pip
  ```sh
  choco install pip
  ```
  - get httpie
  ```sh
  pip install httpie
  ```

-  [ ] Get Mlab URL and create a nodeblog DB
  - Visit: https://mlab.com/home
  - After creating a db you should have something that looks like this
  >mongodb://dbuser:dbpassword@ds027165.mlab.com:27165/nodeblog

- [ ] Sign up for travis CI with github
  - https://travis-ci.org/


- [ ] Setup heroku
 - https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up


## Setup
- `git clone https://github.com/wordyallen/nodeAPIStarter`

- `rm -rf .git`
-  create a new repo on your github account
- run `npm test`
- turn on travis ci
- `git push`
- `heroku create appname`
-  add a badge to readme
- `npm run yolo`


## Step-8
Now that we know a little bit about creating schemas with mongoose lets model our data for our blog api. We'll use json again as a blueprint.

```js
{
  "users": {
    "_id": 1
    "username": "node master"
    "password": "secretp@$$word"
  },

  "posts": {
    "_id": 2
    "title": "What's new in Angular 4",
    "body": "This is my short blog post about angular 4 :(",
    "userId": 1,
    "comments": [1,2,3,4] //comment ids
  },

  "comments": {
    "_id": 1
    "body": "I am a comment",
    "postId": 2
  }
}

```
