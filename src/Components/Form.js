import React, { useState } from "react";
import {CREATE_JOB_MUTATION}  from "../GraphQL/Mutation";
import {useMutation} from "@apollo/client";
import "./Form.css";

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
    <div className="basic-form">
      <div>
      <label>Job Title: </label>
      <input
        type="text"
        placeholder="e.g. Web Developer"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Comitment ID: </label>
      <input
        type="comitmentID"
        placeholder="Comitment ID"
        onChange={(e) => {
          setComitmentID(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Company Name: </label>
      <input
        type="companyName"
        placeholder="e.g. Trimulabs"
        onChange={(e) => {
          setCompanyName(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Location: </label>
      <input
        type="text"
        placeholder="e.g. Lahore"
        onChange={(e) => {
          setLocationNames(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Email: </label>
      <input
        type="text"
        placeholder="example@gmail.com"
        onChange={(e) => {
          setUserEmail(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Job Description: </label>    
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      </div>
      <br></br>
      <div>
      <label>Apply URL: </label>
      <input
        type="text"
        placeholder="example.com"
        onChange={(e) => {
          setApplyURL(e.target.value);
        }}
      />
      </div>
      
      <div className="button">  
      <button onClick={addJob}> Create Job</button>
      </div>
    </div>
  );
}

export default Form;