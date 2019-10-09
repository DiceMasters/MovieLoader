<template>
	<div class="row">
		<div class="col-md-4" v-for="item in genres" :key="item.id">
			<Genre :genreId="item.id" :name="item.name"></Genre>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				genres: {}
			}
		},
		components: {
			Genre: () => import('./Genre')
		},
		methods: {
			getGenres() {
				this.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`)
					.then( response => this.genres = response.data.genres )
					.catch( err => console.log(err))
			}
		},
		mounted() {
			this.getGenres()
		}
	}
</script>