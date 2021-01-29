const axios = require('axios');

// Fetches pokemon api through axios promise statement
axios('https://pokeapi.co/api/v2/pokemon/magikarp')
    .then(function (response) {
        // Uses the 'data' provided from specified api
        const pokemon = response.data;

        // pokemon api will return an object with the data on magikarp since it was requested
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    .catch(function (error) {
        // handles errors such as mispelling or if pokemon is missing from data
        console.log("Error: " + error);
    }); 