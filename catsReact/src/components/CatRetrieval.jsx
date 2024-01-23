import React from 'react'

const   CatRetrieval = (myCats) => {
const {data} = myCats;
console.log(myCats)
  return (
    <div>
        {data.map((cat) => {
        return (
          <div key={cat.id}>
             <img src={cat.catImage} alt="cat" />
            <h2>{cat.country}</h2>
            <p>{cat.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default CatRetrieval