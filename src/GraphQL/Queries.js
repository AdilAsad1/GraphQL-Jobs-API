import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
query {
    getAllJobs {
      id
      title
      description
    }
}
`;