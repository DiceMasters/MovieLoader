import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/Home'
import Movies from './views/Movies'
import Movie from './views/MoviePage'
import GenresPage from './views/GenresPage'

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/genres',
			name: 'genres',
			component: GenresPage
		},
		{
			path: '/genre/:genreId',
			name: 'genre',
			component: Movies
		},
		{
			path: '/movie/:movieId',
			name: 'movie',
			component: Movie
		}
	]
})
