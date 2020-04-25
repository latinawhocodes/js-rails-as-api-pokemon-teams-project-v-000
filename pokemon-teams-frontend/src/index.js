const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => loadTrainers())

const loadTrainers = () => {        //indicates an anonymous function (ES6 syntax)
    fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(json => {
            json.forEach(trainer => renderTrainer(trainer))
        })
}

const renderTrainer = (trainerArray) => {
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    const ul = document.createElement('ul')

    div.setAttribute("class", "card")
    div.setAttribute("data-id", trainerArray.id)

    p.innerHTML = trainerArray.name
    button.setAttribute("data-trainer-id", trainerArray.id)
    button.innerHTML = "Add Pokemon"

    button.addEventListener("click", createPokemon)

    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(ul)
    main.appendChild(div)

    trainerArray.pokemons.forEach(pokemon=> renderPokemon(pokemon))

}

const renderPokemon = (pokemon) => {
    const ul = document.querySelector(`div[data-id="${pokemon.trainer_id}"]`)
    const li = document.createElement('li')
    const button = document.createElement('button')

    li.innerText = `${pokemon.nickname} (${pokemon.species})`
    button.setAttribute("class", "release")
    button.setAttribute("data-pokemon-id", pokemon.id)
    button.innerHTML = "release"

    button.addEventListener("click", deletePokemon)

    li.appendChild(button)
    ul.appendChild(li)

}

const createPokemon = () => {


}

const deletePokemon = () => {

}