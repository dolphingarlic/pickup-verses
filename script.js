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
    "Do you have a twin sister? Because",
    "Hey honey. Are you from Tennessee? Because",
    "Words alone can't describe how you look, but",
    "Can you say Constantinople backwards? Me neither, but",
    "Excuse me, I just noticed",
    "Hi, the voices in my head told me",
    "Are you the Higgs Boson? Because",
    "Baby, are a broom? Because",
];

fetch(
    "https://cors-anywhere.herokuapp.com/https://devotionalium.com/api/v2?lang=en&" +
        `date=${randomDate(new Date(2019, 0, 1), new Date())}`
)
    .then((response) => response.json())
    .then((json) => {
        document.getElementById("pickup").innerHTML =
            pickup_opts[Math.floor(Math.random() * pickup_opts.length)];

        let idx = Math.floor(Math.random() * 3);

        let verse = `${
            json[idx][Math.random() > 0.9 ? "textOriginal" : "text"]
        } (${json[idx]["reference"]})`;
        if (verse.slice(0, 3) === "But") verse = verse.slice(3);
        if (verse.slice(0, 3) === "And") verse = verse.slice(3);
        if (verse.slice(0, 3) === "For") verse = verse.slice(3);
        if (verse.slice(0, 7) === "Because") verse = verse.slice(7);

        document.getElementById("verse").innerHTML = verse;
    });
