<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h3>Фильмы</h3>
			</div>
			<div class="col-lg-6" v-for="movie in movies" :key="movie.id">
				<Movie :movieId="movie.id" :image="movie.poster_path" :title="movie.title" :genre_ids="movie.genre_ids" :overview="movie.overview"></Movie>
			</div>
		</div>
	</div>
</template>

<script>
	import Movie from './../components/Movie.vue'

	export default {
		data() {
			return {
				movies: []
			}
		},
		components: {
			Movie
		},
		methods: {
			getMovies() {
				this.axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}`)
					.then( response => {
						this.movies = response.data.results
					})
					.catch( err => console.log(err))
			}
		},
		created() {
			this.getMovies()
		}
	}
</script>