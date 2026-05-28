import {useContext } from "react";
import { DataContext } from "../App";
export default function Comment2(){

  let { comments } = useContext(DataContext);
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
