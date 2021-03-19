import Express from "express";
import fs from "fs";

const App = Express();
const port = 3010;

let fileContents = fs.readFileSync("database.json");

let database = JSON.parse(fileContents);

App.get("/api/employees/name/:name", (req, res) => {
    let result = {"error": "Not found!"}

        database.forEach((value)  => {
            if(req.params.name == value.name) {
                result = value;
        }
    });

    res.json(result);
})

App.get("/api/ages/:number", (req, res) => {
    let result = {"error": "Not found!"}

        database.forEach((value)  => {
            if(req.params.number == value.age) {
                result = value;
        }
    });

    res.json(result);
})

App.listen(port, () => {
    console.log("Server running!");

})