# .devClub's Website

[![Deployment](https://github.com/umdevclub/umdevclub.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/umdevclub/umdevclub.github.io/actions/workflows/deploy.yml)

## Getting Started

## Prerequisites
[Git](https://git-scm.com/downloads)  
[Node.js (v14.16.0 or newer)](https://nodejs.org/en/download/)

## Setting up and running the project
1. Run the following command to clone the github repository
```bash
git clone https://github.com/umdevclub/umdevclub.github.io
```
2. Navigate into the project's folder
```bash
cd umdevclub.github.io
```
4. Install the dependencies for the project
```bash
npm install
```
5. Run the project
```bash
npm start
```
And now the app will be running in the development mode.  
Open [http://localhost:3000](http://localhost:5173) to view local version of the website in the browser.

## Deployment

Every time a commit is made to the `main` branch, the react source code is automatically built and published to the `gh-pages` branch, which is then used to serve the users.  
So you don't need to worry about deployment of your code: As long as your changes are in the `main` branch, they will be reflected on the actual website within 1-3 minutes.
