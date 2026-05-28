import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowJobs() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/api/jobs")
      .then((response) => {

        console.log(response.data);

        setJobs(response.data.data);

      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <>
      <h1>JOB LIST</h1>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Job Type</th>
            <th>Experience</th>
            <th>Description</th>
            <th>Skills</th>
          </tr>
        </thead>

        <tbody>

          {jobs.map((job) => (
            <tr >

              <td>{job.title}</td>
              <td>{job.companyName}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.jobType}</td>
              <td>{job.experience}</td>
              <td>{job.description}</td>

              <td>
                {job.skills.join(", ")}
              </td>

            </tr>
          ))}

        </tbody>

      </table>
    </>
  );
}