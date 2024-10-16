const express = require("express")
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')




app.use(cors({
    origin: "*"
}));

const mongoose =  require('mongoose')

// connexion à la base de données
dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL

mongoose.connect(MONGODB_URL)
.then(() => {
    console.log("connection avec mongoDB effectué avec succès");
  })
  .catch((error) => {
    console.log(`erreur lors de la connection à la base de données${error}`);
  });



const post_route = require('./routes/postRoute')

app.use("/formation-node-mongodb-api.vercel.app" ,post_route)

app.listen(PORT , function () {
    console.log(`Server is running au port ${PORT}`);
})