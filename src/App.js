import React from "react";
import PropTypes from "prop-types";
import movieList from "./movieList";

function Movie({name , picture, rating}){
  return <div>
    <h1>i like {name} </h1>
    <h4>{rating}/5.0</h4>
    <image src = {picture} />
  </div>
}

Movie.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return <div>
    Hello!!!
    {movieList.map( movie => (
    <Movie 
      key ={movie.id} 
      name={movie.name} 
      picture={movie.picture}
      rating={movie.rating}/>
    ))}
    </div>;
}

export default App;
