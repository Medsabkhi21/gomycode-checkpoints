import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";
  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import MovieListHeading from './Components/MovieListHeading';
import SearchBox from './Components/SearchBox';
import { Movie } from './Components/Movie';
const App = () => {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('avengers');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&3896198&apikey=3009db96`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	

	return (
		
	
		<Router>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			{/* <div className='container-fluid movie-app'>
			<div className='flex'>
				<MovieList movies={movies}/>
			</div>	
			</div> */}
			<Routes>
			<Route exact path="/" element={<MovieList movies={movies} />}/>
			<Route  path="/movie/:id" element={<Movie  movies={movies}/>} />
			</Routes>
	  </Router>
	  
		);
};

export default App;



