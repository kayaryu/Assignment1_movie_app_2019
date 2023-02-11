import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img
        src={picture}
        width="240"
        alt={name}
      />
    </div>
  );
}

const foodIlike = [
  {
    id: 1,
    name: "wine",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    id: 2,
    name: "potato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    id: 3,
    name: "tomato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
  {
    id: 4,
    name: "sth",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
  },
];

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      name={dish.name}
      picture={dish.image}
    />
  );
}

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.picture}
        />
      ))}
    </div>
  );
}

export default App;
