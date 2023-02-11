import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img
        src={picture}
        width="240"
      />
    </div>
  );
}

const foodIlike = [
  {
    name: "wine",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    name: "potato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    name: "tomato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    name: "sth",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
];

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food
          name={dish.name}
          picture={dish.image}
        />
      ))}
    </div>
  );
}

export default App;
