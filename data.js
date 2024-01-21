import axios from 'axios';

axios.get('data.json')
  .then(response => {
    const data = response.data;
    data.map(function (festival) {
      const myContainer = document.querySelector("body");
      const miniContainer = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("h3");
      const date = document.createElement("p");
      const location = document.createElement("p");
      const price = document.createElement("p");
      const btn = document.createElement("button");

      title.textContent = festival.title;
      date.textContent = festival.date;
      location.textContent = festival.location;
      price.textContent = `Ksh ${festival.price}`;
      img.src = festival.imageUrl;
      btn.textContent = `Buy Now`;

      miniContainer.appendChild(img);
      miniContainer.appendChild(title);
      miniContainer.appendChild(date);
      miniContainer.appendChild(location);
      miniContainer.appendChild(price);
      miniContainer.appendChild(btn);
      myContainer.appendChild(miniContainer);
    });
  })
  .catch(error => {
    console.error('error');
  });
