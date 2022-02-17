import React, {useEffect, useState} from "react";
import { useQuery, gql, useSubscription } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";

function GetJobs() {
    const {data} = useQuery(LOAD_JOBS);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      if (data) {
        //console.log(data)
        setJobs(data.jobs);
      }
    }, [data]);
  
    return (
      <div>
      {/*jobs.map((val) => {
        return <h1>{val.title}</h1>;
      })*/}
      </div>

    );
  }
  export default GetJobs;