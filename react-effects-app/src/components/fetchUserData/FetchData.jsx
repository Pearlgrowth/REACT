import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/photos/";
    fetch(url)
      .then((response) => response.json())
      .then((photos) => {
        setphotos(photos);
      });
  }, []);
  return photos.splice(0, 20).map((photo) => {
    return (
      <div key={photo.id}>
        <img src={photo.url} alt="" />
        <h2>{photo.title}</h2>
      </div>
      
    );
  });
  
};

export default FetchData;
