import React from "react";
import axios from "axios";

class Post {
  create(formData) {
    const url = "http://localhost:8000/api/create-post";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, formData, config);
  }


  getPosts(){
    const url = "http://localhost:8000/api/get-posts";

    return axios.get(url);

  }


  deletePost(id){
    const url = "http://localhost:8000/api/delete-post/"+id; /// https://formation-node-mongodb-api.vercel.app est remplacé par localhost:8000 pour lire en local

    return axios.get(url);

  }


  update(formData) {
    const url = "http://localhost:8000/api/update-post";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, formData, config);
  }


}



export default new Post();
