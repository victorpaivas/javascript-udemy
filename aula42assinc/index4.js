// Fetch API

const conselhoApi = {}


conselhoApi.getCensolehos = (off = 0, limit = 10) => {
    const url = "https://api.adviceslip.com/advice"

    return fetch(url)
    .then((response) => response.json())
    .then((jsonbody) => jsonbody.results)
    .then((conselhos) => conselhos.map(conselhoApi.getConselehos))
}