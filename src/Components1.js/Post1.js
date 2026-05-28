import { useState,useEffect } from "react";
import axios from "axios";
export default function Post1(){

  let [posts, setpost] = useState([{}]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setpost(response.data))
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1>posts Details:</h1>
      <table border="2px ">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map((post) => (
              <tr >
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  );
}
