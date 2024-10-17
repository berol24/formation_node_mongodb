import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import UpdateModalComponent from "./UpdateModalComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"  
import Header from "./Header";
function ShowComponent() {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    setPosts(await postService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts.data);

  /// delete post
  const deletePost = async (id, e) => {
    var response = await postService.deletePost(id);
    if (response.data.success == true) {
      alert(response.data.msg);
      document.getElementById(id).parentElement.parentElement.remove();
    } else {
      alert(response.data.msg);
    }
  };


  // update post





  return (
    <div className="App">

<Header/>
      <h1>Posts</h1>
      {posts.data !== undefined  && posts.data.data.length > 0  && (
  <table style={{ width: "100%" }} border={"1"}>
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Image</th>
        <th>Delete</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
      {posts.data.data.map((post) => (
        <tr key={post._id}>
          <td>{post.title}</td>
          <td>{post.date}</td>
          <td>
            <img
              src={"http://localhost:8000/api/postImages/"+ post.image}
              alt={post.title}
              width={50}
              height={50}
            />
          </td>
          <td>
            <button
              id={post._id}
              onClick={(e) => deletePost(post._id, e)}
            >
              Delete
            </button>
          </td>
          <td>
            <UpdateModalComponent id={post._id} title={post.title} date={post.date} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}


      
    </div>
  );
}

export default ShowComponent;
