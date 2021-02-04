const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const newJokeText = await getDadJoke();

    const newLI = document.createElement('li');
    newLI.append(newJokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com", config);
        return res.data.joke;
    } catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', addNewJoke);