import Express from 'express';
const App = Express();
const port = 45030;

//Create a GET route called people/:person where person is a route parameter.
//Should return a JSON object with the property, {name: "name"}, for exact matches of a name found in the array names.

const names = [
    'Cortney',
    'Dewayne',
    'Trenton',
    'Pamala',
    'Ettie',
    'Errol',
    'Lorrie',
    'Hang',
    'Lauryn',
    'Caterina',
    'Isa',
    'Marcela',
    'Michelle'
]; 

App.get("/people/:person", (req, res) => {

//If the name is not found, the route should respond with a JSON object, {name: "not found"}
    let result = {name: "Not found"}

    names.forEach((name) => {
        if(req.params.person == name){
            result = {name: "name"}
        }
    })
    // respond with result if found
    res.json(result);
})

//Create a GET route called search/:name  where name  is a route parameter.
//Should return a JSON object, {search: [names]}, based on if the route parameter can be found in the string of the name, all of which should be returned as part of an array. 


App.get("/search/:name", (req, res) => {

//If search cannot be found, the route should respond with a JSON object, {search: "not found"}
    let result = {search: ["Not found!"]}
    let searchResult = [];

    names.forEach((value) => {
        if(value.includes(req.params.name)){
            searchResult.push(value);
        }
    })
//send the response
        if(searchResult.length > 0){
            result = {search: [searchResult]};
    }
    //respond with result if one is found
    res.json(result);
})

App.listen(port, () => {
});