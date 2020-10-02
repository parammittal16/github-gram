# github-gram

React Assignment - GithubGram

Date 04-02-2020
A Github API using application to display user profile when login and can Follow others just like instagram.

## Steps to setup the project:

Plz see .nvmrc file to check the node version required for the project.
Plz run these commands before.

 - `nvm use`
 - `nvm install`
 - `nvm exec`

### `npm install`

Go to the project root directory and run above command to install all dependencies of the project.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Overview of the project

GithubGram is a webapp build using react and github API.
Here you can Login to your account, Search Users, View Your Profile information, It also gives 3 random users list every time you open your Dashboard you can Follow them or click cross button on a card to get next suggestion.

### Login

- Generate a Personal Access token from your official github account.
- Remember this token and save it.
- To Login enter your github username and the token.

### Dashboard

- Once you are logged In you can view your profile.
- Also 3 random github users are shown.

### Follow

- Click on cross button to close a user and show next one.
- Follow any user clicking on follow button.

### Search

- A search bar is provided in navbar To search users by their username.
