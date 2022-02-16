import { gql} from '@apollo/client';


export const CREATE_JOB_MUTATION = gql`
  mutation PostJobInput(
    $title: String!
    $comitmentID: ID!
    $companyName: String!
    $locationNames: String!
    $userEmail: String!
    $description: String!
    $applyUrl: String!
  ) {
    PostJobInput(
      title: $title
      comitmentID: $comitmentID
      companyName: $companyName
      locationNames: $locationNames
      userEmail: $userEmail
      description: $description
      applyUrl: $applyUrl
      
    ) {
      id
    }
  }
`;