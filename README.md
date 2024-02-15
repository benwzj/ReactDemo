## What is this App

ReactDemo is ReactJS exercise app to run through many React Feature, like nevigation, controlled input, using API, handle list, etc.

This app is using `npx create-react-app ReactDemo` to create!

- This app will connect to JSON sever for managing data. Start JSON Sever by: `npm run server` under `this app directionary` in terminor.

### JSONServer
[Morn info](https://www.npmjs.com/package/json-server)

This is a simple remote JSON database interface server. it is easy to setup, connect, implement data management.
JSONServer manage the item ID for you. So you don't need to manage ID yourself, and just use the ID which returned by JSONServer.

#### Start Json Server: 
under this app folder: run this command in terminal: `npm run server`

#### Setup
- You can use `api.http` to test API.
- Edit `data.type` in `JsonServer.js`.
For example, you want to store states for your new functionality in this App, you can add a new `data.type`. And add cor-responsed resource in `db.json`.

#### Files for JSONServer:
- `db.json` is the database file for JSONServer. It is plain text file.
- `api.http` is the JSONServer test file. it is support by a VSCode plugin.

### Using Unsplash photo API

limitation: 50 API visits per minute

## Available Scripts
In the project directory, you can run:

### `npm install`
Install Dependencies according to package-lock.json

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

