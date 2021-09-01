import React from "react";

function Movie({name , picture}){
  return <div>
    <h1>i like {name} </h1>
    <image src = {picture} />
  </div>
}

const movieList = [
  {
    name:"엔드게임",
    picture:"https://play-lh.googleusercontent.com/HykKFGtZfH31Yr1KqL8QfaM8aGsN3JQCYYCV4w2Wy_22h1TkpVJfztzsyyVEJbmCbonrBA"
  },
  {
    name: "인피니티 워",
    picture : "https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg"
  }
];



function App() {
  return <div>
    Hello!!!
    {movieList.map( movie => (
    <Movie name={movie.name} picture={movie.picture}/>
    ))}
    </div>;
}

export default App;
