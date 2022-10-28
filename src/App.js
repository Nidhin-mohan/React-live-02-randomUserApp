
import './App.css';
import Card from './Components/Card';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const {data} = await axios.get("https://randomuser.me/api/");

   const details = data.results[0];
//  console.log(details)
    setDetails(details);

  }

  useEffect(() => {
    fetchDetails();

  }, [])

  


console.log("hi ther" ,details)

  return (
    <div className="container">
      <h1 className="text-white bg-dark"> Generating Random User using Api</h1>

      <Card details={details} />
    </div>
  );
}

export default App;
