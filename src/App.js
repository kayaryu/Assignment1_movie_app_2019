import React from "react";
import PropTypes from "prop-types";

const foodIlike = [
  {
    id: 1,
    name: "wine",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
    rating: 4.8,
  },
  {
    id: 2,
    name: "potato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
    rating: 5,
  },
  {
    id: 3,
    name: "tomato",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
    rating: 3,
  },
  {
    id: 4,
    name: "sth",
    image:
      "https://static01.nyt.com/images/2022/03/10/dining/10pour1/10pour1-superJumbo.jpg?quality=75&auto=webp",
    rating: 4.7,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img
        src={picture}
        width="240"
        alt={name}
      />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function renderFood(dish) {
//   console.log(dish);
//   return (
//     <Food
//       name={dish.name}
//       picture={dish.image}
//     />
//   );
// }
Food.propTypes = {};

function App() {
  return (
    <div>
      {foodIlike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
