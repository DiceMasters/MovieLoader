<template>
	<div class="card mb-3">
		<div class="row no-gutters">
			<div class="col-md-4">
				<img :src="'https://image.tmdb.org/t/p/w154' + image" v-if="image != null" class="card-img">
				<img src="../assets/no-photos.jpg" v-if="image == null" class="card-img">
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{{ title }}</h5>
					<div class="genre_box">
						<div class="genre_item" v-for="item in genres">
							<span class="badge badge-pill badge-dark">{{ item.name }}</span>
						</div>
					</div>
					<p class="card-text">{{ overview.substring(0, 150).trim() + '...' }}</p>
					<router-link :to="{ name: 'movie', params: { movieId: movieId } }" class="btn btn-primary">Подробнее</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['movieId', 'image', 'title', 'genre_ids', 'overview'],
		data() {
			return {
				genres: []
			}
		},
		methods: {
			getGenres() {
				this.axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`)
					.then( response => {
						this.genres = response.data.genres

						this.genres = this.genres.filter( val => this.$props.genre_ids.includes(val.id) )
					})
			}
		},
		mounted() {
			this.getGenres()
		}
	}
</script>

<style lang="less" scoped>
	.card {
		height: calc(100% - 1rem);
	}
</style>