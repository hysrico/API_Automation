const express = require("express");
const { application } = require("express");

application.use(express.json());

const category = [
    {
        API: "AdoptAPet",
        Description: "Resource to help get pets adopted",
        Auth: "apiKey",
        HTTPS: true,
        Cors: "yes",
        Link: "https://www.adoptapet.com/public/apis/pet_list.html",
        Category: "Animals"
    }
]