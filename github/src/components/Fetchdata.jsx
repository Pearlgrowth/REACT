import React, { useState, useEffect } from "react";

const Fetchdata = ({ username }) => {
  const token = "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";
  const [data, setdata] = useState({});
  const getData = async (username) => {
    const api = `https://api.github.com/users/${username}`;
    const response = await fetch(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Github-Api-Version": "2022-11-28",
      },
    });
    const results = await response.json();
    setdata(results);
  };
  useEffect(() => {
    getData(username);
  }, [username]);
  
  
  return (
    <div>
        <br /><br />
      <img src={data.avatar_url} alt="Users Profile Picture" />
<br />
       <h2>Username: {data.login}</h2>

    <h3>Type: {data.type} </h3>
      <h2>Users Followers:  {data.followers_url}</h2>
     <h2>Number of public repositories: {data.public_repos}</h2>
    </div>
  );
};

export default Fetchdata;
