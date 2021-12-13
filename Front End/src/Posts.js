import React, { useState, useEffect } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([
    {
      header: "",
      description: "",
    },
  ]);
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");

  /*
  useEffect(() => {
    fetch("/posts").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setPosts(jsonRes))
  })
  */

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        return res.data;
      })
      .then((jsonRes) => setPosts(jsonRes));
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const uploadPost = {
      header: header,
      description: description,
    };

    axios
      .post("http://localhost:5000/posts", uploadPost)
      .then((res) => console.log(res.data));

    setHeader("");
    setDescription("");
  };

  return (
    <div>
      <h2>Posts</h2>
      <h3>here are some posts</h3>
      {posts.map((post) => (
        <div>
          <h4>{post.header}</h4>
          <p>{post.description}</p>
        </div>
      ))}
      <div>
        <h6>You can also write your own</h6>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="add header"
            onChange={(e) => setHeader(e.target.value)}
            value={header}
          />
          <textarea
            placeholder="add description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Posts;
