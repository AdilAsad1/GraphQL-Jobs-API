import React, { useState } from "react";
import {CREATE_JOB_MUTATION}  from "../GraphQL/Mutation";
import {useMutation} from "@apollo/client";

function Form() {
  const [title, setTitle] = useState("");
  const [comitmentID, setComitmentID] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [locationNames, setLocationNames] = useState("");
  const [userEmail, setUserEmail] = useState("")  
  const [description, setDescription] = useState("");
  const [applyUrl, setApplyURL] = useState("");
  

  const [PostJobInput, { error }] = useMutation(CREATE_JOB_MUTATION);

  const addJob = () => {
    PostJobInput({
      variables: {
        title: title,
        comitmentID: comitmentID,
        companyName: companyName,
        locationNames: locationNames,
        userEmail: userEmail,
        description: description,
        applyUrl: applyUrl,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="comitmentID"
        placeholder="Comitment ID"
        onChange={(e) => {
          setComitmentID(e.target.value);
        }}
      />
      <input
        type="companyName"
        placeholder="Company Name"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => {
          setLocationNames(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="User Email"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />    
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="applyURL"
        onChange={(e) => {
          setApplyURL(e.target.value);
        }}
      />
      
      
      <button onClick={addJob}> Create Job</button>
    </div>
  );
}

export default Form;