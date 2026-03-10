import { contestants } from "./eurovisionContestants.js";

document.title = `Eurovisions 2000s`

document.body.innerHTML = `
    <h1>Eurovision song contest - 2000s Results</h1>
    <p> Top 5  places for each year </p>
    <br>

    <input type="text" id="search-input" placeholder="Search by song, artist or country"/>
    <ul id="search-result"></ul>
    <br>
    
    <h2 id="first-place-header"></h2>
    <ul id="first-place-list"></ul>
    <br>

    <h2 id="second-place-header"></h2>
    <ul id="second-place-list"></ul>
    <br>
    
    <h2 id="third-place-header"></h2>
    <ul id="third-place-list"></ul>
    <br>
    
    <h2 id="fourth-place-header"></h2>
    <ul id="fourth-place-list"></ul>
    <br>
    
    <h2 id="fifth-place-header"></h2>
    <ul id="fifth-place-list"></ul>
    <br>`

    document.getElementById('first-place-header').innerHTML = 'First place'
    document.getElementById('second-place-header').innerHTML = 'Scond place'
    document.getElementById('third-place-header').innerHTML = 'Third place'
    document.getElementById('fourth-place-header').innerHTML = 'Fourth place'
    document.getElementById('fifth-place-header').innerHTML = 'Fifth place'

for (const person of contestants) {
        if (person.year >= 2000 && person.year <=2009) {

            if (person.placeFinal === 1) {
                document.getElementById('first-place-list').innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li>'
            }
             if (person.placeFinal === 2) {
                document.getElementById('second-place-list').innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li>'
            }
             if (person.placeFinal === 3) {
                document.getElementById('third-place-list').innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li>'
            }
            if (person.placeFinal === 4) {
                document.getElementById('fourth-place-list').innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li>'
            }
            if (person.placeFinal === 5) {
                document.getElementById('fifth-place-list').innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li>'
            }
        }
    }

const searchInput = document.getElementById('search-input')
const searchResults = document.getElementById('search-result')

searchInput.addEventListener('input', function () {
    const query = searchInput.value
    searchResults.innerHTML = ''

    if (query === '') return 

    for (const person of contestants) {
        if (person.song && person.song.includes(query) ||
            person.performer && person.performer.includes(query) ||
            person.toCountry && person.toCountry.includes(query)) {
            searchResults.innerHTML += '<li>' + person.year + ' - ' + person.song + ' by ' + person.performer + ' (' + person.toCountry + ') </li> '
        }
    }
})