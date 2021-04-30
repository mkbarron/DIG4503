import MongoClient from 'mongodb';
import chalk from "chalk";

const URL = "mongodb+srv://mbarron:PvOP3Qz7ObgY81CL@cluster0.oewwc.mongodb.net/";

MongoClient.connect(URL, { useUnifiedTopology: true})

.then(connection => {
    let database = connection.db("grocery");
    
    let collection = database.collection("food_sale");

    let cursor = collection.find({sub_group: {$gte:"Grain"}, sale: {$gte:"Y"}});

    cursor.forEach(document => {
        
        console.log(`Successfully found this ` + chalk.white.bgBlue(document.name) + ' grocery item ');
    },  () => {
        connection.close();
    })
    
})
.catch(error => {
    console.log(chalk.white.bgRed("Error:" + error));
});