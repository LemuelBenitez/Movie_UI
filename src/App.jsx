import {useState, useEffect} from 'react'
import { baseURL, getAllMovies } from './components/api/moviesAPI'
import Layout from './components/Layout';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Header from './components/Header';
import PlayerButton from './components/PlayButton';
import Reviews from './components/Reviews';

function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  
  useEffect(()=>{
    getAllMovies()
    .then(response =>{
      console.log(response.data);
      setMovies(response.data);
    })
    .catch(error =>{
      console.log(error);
    });
  },[]);

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await baseURL.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  return (
    <div className='App'>
    <Header />
     <Routes>
      <Route path="/" element={<Layout />} > 
      <Route path="/" element={<Home movies ={movies} />} />
      <Route path="/Trailer/:ytTrailerId" element={<PlayerButton/>}></Route>
      <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>

      </Route>
     </Routes>
    </div>
  )
}

export default App
