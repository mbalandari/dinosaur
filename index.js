const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch")

require('dotenv').config()

const HOST = process.env.RAPIDAPI_HOST
const KEY = process.env.RAPIDAPI_KEY




app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

app.get("/dinoname", async (request, response) => {
    const fetchApi = await fetch('https://dinoipsum.com/api/?format=json&words=2&paragraphs=1')

    const dinoNameResponse = await fetchApi.json()
    console.log(dinoNameResponse);

    response.json(dinoNameResponse)

})

app.get("/dinoimage", async (request, response) => {
    const fetchApi = await fetch(`https://${HOST}/images/search?q=dinosaur&count=10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${HOST}`,
            "x-rapidapi-key": `${KEY}`
        }
    })

    const dinoImageResponse = await fetchApi.json()
    response.json(dinoImageResponse)

})