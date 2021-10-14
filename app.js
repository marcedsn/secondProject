const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button');
const btnclose = document.getElementById('btnclose');
const btnstart = document.getElementById('btnstart');

const addNewJoke = async() => {
    const jokeText = await getDadJoke();
    const newSpan = document.createElement('span');
    newSpan.innerText = jokeText;
    jokes.append(newSpan);
    button.innerText = "Get another!";
}

const getDadJoke = async() => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

const deleteJoke = () => {
    let delSpan = document.querySelector('span');
    if (delSpan != null) {
        delSpan.remove();
    }
}

const desactivateButton = () => {
    button.classList.add("disabled");
    button.innerText = "Get joke!";

    btnclose.classList.add("disabled");
    btnstart.classList.remove("disabled");
}

const activateButton = () => {
    button.classList.remove("disabled");
    button.innerText = "Get joke!";

    btnclose.classList.remove("disabled");
    btnstart.classList.add("disabled");
}

button.addEventListener('click', () => {
    deleteJoke();
    addNewJoke();
});

btnclose.addEventListener('click', () => {
    desactivateButton();
    deleteJoke();
});

btnstart.addEventListener('click', () => {
    activateButton();
});