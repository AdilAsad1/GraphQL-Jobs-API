import { gql} from '@apollo/client';

export const CREATE_JOB_MUTATION = gql`
  mutation postJob(input:{
    $title: String!
    $comitmentID: "cjtu8esth000z0824x00wtp1i"
    $companyName: "TrimuLabs"
    $locationNames: String!
    $userEmail: String!
    $description: String!
    $applyUrl: String!
  }) {
    PostJobInput(
      title: $title
      comitmentID: $comitmentID
      companyName: $companyName
      locationNames: $locationNames
      userEmail: $userEmail
      description: $description
      applyUrl: $applyUrl
      
    ) {
      title
    }
  }
`;