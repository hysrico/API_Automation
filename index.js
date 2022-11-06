const express = require('express')
const app = express();
const utils = require('./test/app_test');

app.get("/entries/category", (requiest, response) => {
    response.send()
})

app.get("/entries/category/animals", (request, response) => {
    // this should have id - minus in api
    const categoryid = require.params.id
    const category = category.find(categoryid === (parseInt));
    if(!category) return response.status(404).send("server failed to parse request: schema: invalid path `category` ");
    response.send(category)
})