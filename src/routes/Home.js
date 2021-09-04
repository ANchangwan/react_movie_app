import React from "react";
import axios from "axios";
import Movie from "../components/Movies";
import "./Home.css";

class Home extends React.Component{
 state = {
   isLoding: true,
   movies:[],
   error: false
 };


 getMovies = async () =>{
      const {data:{
        data:{movies}
      }} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({ movies, isLoding:false });
 };


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
            movie.map(movies =>(

              <Movie
                key={movies.id} 
                id={movies.id} 
                year={movies.year} 
                title={movies.title} 
                summary={movies.summary} 
                poster={movies.medium_cover_image} 
                genres={movies.genres}
                />
            ))}
        </div>
      )})</section>)
 }
}

export default Home;
