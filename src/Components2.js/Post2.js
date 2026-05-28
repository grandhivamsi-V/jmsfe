import {useContext} from "react";
import { DataContext } from "../App";

export default function Post2(){

  let { posts } = useContext(DataContext);

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
