const express = require("express")

const post_route = express()

const bodyParser = require('body-parser') // permet d'interpreter le corps json d'une requête HTTP 

post_route.use(bodyParser.json()) 

post_route.use(bodyParser.urlencoded({extended:true}))


const multer = require('multer')  // pour le telechargement des fichiers 
const path = require('path')

// gestion des fichiers statiques

post_route.use(express.static('public'))  

// post_route.use(express.static(path.join(__dirname, 'public')))

// gestion du telechargement des images

const storage =   multer.diskStorage({
    destination: function (req , file , cb) {
        cb(null , path.join(__dirname, "../public/postImages"), function (error , success) {  /// lieu de dépôt des images 
            
      if (error) {
        console.log(error);
      }
        }); 
    },
    filename: function (req , file , cb) {
      const name =   Date.now() + '-' + file.originalname;
      cb(null , name , function (error , success) {
         if (error) {
            console.log(error);
         }
      })
    }
})


const upload = multer({storage:storage});


const postController = require('../controllers/postController')

post_route.post('/create-post', upload.single('image') , postController.createPost)

post_route.get('/get-posts', postController.getPosts)

post_route.get('/delete-post/:id', postController.deletePost)


post_route.post('/update-post',upload.single('image') , postController.updatePost)

module.exports = post_route;