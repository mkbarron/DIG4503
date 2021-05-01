import MongoClient from 'mongodb';
import chalk from "chalk";

//my person databse login for mongodb
const URL = "mongodb+srv://mbarron:PvOP3Qz7ObgY81CL@cluster0.oewwc.mongodb.net/";
// connects database above
MongoClient.connect(URL, { useUnifiedTopology: true})

.then(connection => {
    //defines database variable as grocery data
    let database = connection.db("grocery");
    //defines collection variable as food item data    
    let collection = database.collection("food_sale");
    // cursor filters through data
    let cursor = collection.find({sub_group: {$gte:"Tropical Fruit"}, sale: {$gte:"on sale"}});
    //returns filtered results
    cursor.forEach(document => {
     //comsole log reads name and sale results with added message      
        console.log(`Successfully found this ` + chalk.black.bgWhite(document.food_name) + ' that is ' + chalk.black.bgGreen(document.sale) + ' today.');
    },  () => {
        // closes the connection
        connection.close();
    })
    
})
// catches all errors
.catch(error => {
    //reads error message
    console.log(chalk.red.bgWhite("Error:" + error));
});