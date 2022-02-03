const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch")

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