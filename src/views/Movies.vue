<template>
	<div class="container">
		<div class="row align-items-stretch">
			<div class="col-12">
				<h3>{{ genreName }}</h3>
			</div>
			<div class="col-6" v-for="movie in movies" :key="movie.id">
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
				genre: this.$route.params.genreId,
				genreName: '',
				movies: []
			}
		},
		components: {
			Movie
		},
		methods: {
			getMovies() {
				this.axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.api_key}&with_genres=${this.genre}`)
					.then( response => {
						this.movies = response.data.results
					})
					.catch( err => console.log(err))
			},
			getGenreName() {
				this.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`)
					.then( response => {
						response.data.genres.map( val => {
							if (val.id == this.genre) this.genreName = val.name
						})
					})
			}
		},
		created() {
			this.getMovies()
			this.getGenreName()
		}
	}
</script>