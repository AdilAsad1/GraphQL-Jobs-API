import { gql } from "@apollo/client";

export const LOAD_JOBS = gql`
query {
  jobs{
    title
    company{
      name
      id
    }
  }
}
`;