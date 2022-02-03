document.querySelector("#btn-load").addEventListener('click', () => {
    getDinoName()
})


async function getDinoName() {
    const response = await fetch("/dinoname")

    const data = await response.json()

    let dinoName = data[0].join(" ")
    console.log(dinoName);
}