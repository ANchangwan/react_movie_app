import React from "react";
import axios from "axios";
import Movie from "./Movies";

class App extends React.Component{
 state = {
   isLoding: true,
   movies:[]
 };

 getMovies = async () =>{
  
    const {data:{
      data:{movies}
    }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoding:false });
 }

 componentDidMount(){
   this.getMovies();
 }
 render(){
   const {isLoding, movie} = this.state;
   return( 

   <section className  = "container">{ isLoding ? 
      <div className  ="loader">
          <span className ="loader__text">Loding...</span>
      </div>
      : (
        <div className  = "movies">
          {
            movie.map(movie =>(

              <Movie
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
                />
            ))}
        </div>
      )})</section>)
 }
}

export default App;
