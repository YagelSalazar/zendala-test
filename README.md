## About

This is a project made as a test for zendala by Yagel Salazar

## Introduction

This boilerplate can be used as the basis for an application that needs to authenticate, register and log in users. For the authentication process, it uses a JSON Web Token that validates the user before performing certain operations.

## Just want it to try it?

To test it on your own computer:

- Add your mongodb uri in .env file in the server directory.
- Run **npm install** or **yarn**
- Go to the server directory (server side). Run **npm run dev** or **yarn run dev**
- In the root (another tab), (client side) run **npm run dev** or **yarn run dev**

## Overview from app structure

The client side is made with React.js. Lets you divide the page into components and seperate the logic from the view. To centralize the data, it uses Redux.

The server side is really simple. It is made in Node.js with Express. For communicate with the Database, it uses Mongoose as MongoDB Object Modeling. 