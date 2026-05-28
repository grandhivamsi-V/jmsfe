import {useContext } from "react";
import { DataContext } from "../App";
export default function Album2(){

  let { albums } = useContext(DataContext); 

  return (
    <>
      <h1>Albums Details:</h1>
      <table border="2px ">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            albums.map((album) => (
              <tr >
                <td>{album.userId}</td>
                <td>{album.id}</td>
                <td>{album.title}</td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </>
  );
}
