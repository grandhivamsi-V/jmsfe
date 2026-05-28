import { useState,useEffect } from "react";
import axios from "axios";
export default function Comment1(){

  let [comments, setcomment] = useState([{}]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setcomment(response.data))
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1>Comments Details:</h1>
      <table border="2px ">
        <thead>
          <tr>
            <th>PostId</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
           comments.map((comment) => (
              <tr >
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.emil}</td>
                <td>{comment.body}</td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  );
}
