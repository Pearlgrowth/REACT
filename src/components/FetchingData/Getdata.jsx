import React, { useState, useEffect} from "react";

const Getdata = () => {
  const [data, setdata] = useState({
  });
  const getData = async () => {
    const api = 'https://dummyjson.com/products';
    const response = await fetch(api);
    const results = await response.json();
    setdata(results);
  };



  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return data.products.map((product) => {
    return (
  
        <div key={product.id} >
          <h1>{product.title}</h1>
          <img
            src={product.thumbnail}
            alt={product.title}
          />
         
          
        </div>
    );
  });
};

export default Getdata;