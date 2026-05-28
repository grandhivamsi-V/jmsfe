import { useState,useEffect } from "react";
import axios from "axios";
export default function Album1(){

  let [albums, setalbum] = useState([{}]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => setalbum(response.data))
      .catch((error) => {
        console.log(error);
      })
  }, []);

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
