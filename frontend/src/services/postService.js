import React from "react";
import axios from "axios";

class Post {
  create(formData) {
    const url = "formation-node-mongodb-api.vercel.app/api/create-post";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, formData, config);
  }


  getPosts(){
    const url = "formation-node-mongodb-api.vercel.app/api/get-posts";

    return axios.get(url);

  }


  deletePost(id){
    const url = "formation-node-mongodb-api.vercel.app/api/delete-post/"+id;

    return axios.get(url);

  }


  update(formData) {
    const url = "formation-node-mongodb-api.vercel.app/api/update-post";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, formData, config);
  }


}



export default new Post();
