/*
    run in terminal: npm init -y
    run in terminal: npm install --save-dev prettier
    in 'scripts' in package.json, replace "test" line with: "format": "prettier --write *.js" 
    you can run this script in terminal: npm run format
    run in terminal: npm install express 
    express allows you to create web servers and web API's
    Code below is a simple web server that listens at port 3000 and answer hello world to request
    run in terminal: node index.js
    Add script in package.json: "start": "node index.js",
    run using npm start in terminal  or selecting script in VSCode explorer
    run in terminal: npm install dotenv
    dotenv allows you to manage your application configurations including secrets
    Create a new file called '.env' and add secret variables/configs there
    To ensure that they never get committed to a repository, create '.gitignore' file
    Add line by line every file/package you don't want commited: .env, node_modules/
*/
require("dotenv").config()

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {res.send("Hello Wrold!"); });

app.listen(port,
    () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });