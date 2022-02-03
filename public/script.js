
document.querySelector("#btn-load").addEventListener('click', () => {
    getDinoName()
    getDinoImage()
})


async function getDinoName() {
    const response = await fetch("/dinoname")

    const data = await response.json()

    let dinoName = data[0].join(" ")
    console.log(dinoName);
    document.querySelector("#dinoName").textContent = dinoName
}

async function getDinoImage() {
    const response = await fetch("/dinoimage")

    const data = await response.json()

    let dinoImage = data.value[Math.floor(Math.random() * data.value.length)]
    let dinoImageUrl = dinoImage.thumbnailUrl
    let dinoAlt = dinoImage.name
    console.log(dinoImageUrl);

    if (document.querySelector("#dinoImg")) {
        document.querySelector("#dinoImg").remove()
    }

    let img = document.createElement("img")
    img.src = dinoImageUrl
    img.alt = dinoAlt
    img.id = "dinoImg"
    document.querySelector("body").appendChild(img)
}