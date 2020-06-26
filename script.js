function randomDate(start, end) {
    date = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

pickup_opts = [
    "Did you fall from heaven? Because",
    "Damn, girl. Didn't anyone tell you that",
    "Are you a candle? Because",
    "Can I borrow a quarter? Because",
    "You're hot, but",
    "Excuse me, sexy, but",
    "Do you have a twin sister? Because"
];

fetch(
    "http://cors-anywhere.herokuapp.com/https://devotionalium.com/api/v2?lang=en&" +
        `date=${randomDate(new Date(2019, 0, 1), new Date())}`
)
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("pickup").innerHTML =
            pickup_opts[Math.floor(Math.random() * pickup_opts.length)];

        let idx = Math.floor(Math.random() * 3);
        document.getElementById("verse").innerHTML =
            `${json[idx][Math.random() > 0.9 ? "textOriginal" : "text"]} (${json[idx]["reference"]})`;
    });
