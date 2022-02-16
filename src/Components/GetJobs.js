import React, {useEffect, useState} from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";

function GetJobs() {
    const { error, loading, data } = useQuery(LOAD_JOBS);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
      if (data) {
        setJobs(data.getAllJobs);
      }
    }, [data]);
  
    return (
      <div>
        {/* {" "}
        {jobs.map((val) => {
          return <h1> {val.title}</h1>;
        })} */}
      </div>
    );
  }
  
  export default GetJobs;