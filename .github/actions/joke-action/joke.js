const request  = require("request-promise");

const options = {
    method: "GET",
    url: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing javascript actions github skills course"
    },
    json: true
};

async function getJoke() {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;