<template>
	<div class="container">
		<div class="row">
			<div class="col-xl-4 col-sm-4 col-12" v-if="movieData.poster_path != null">
				<img :src="'https://image.tmdb.org/t/p/original' + movieData.poster_path" class="img-fluid">
				<p class="text-muted">
					«<small>{{ movieData.tagline }}</small>»
				</p>
			</div>
			<div class="col-xl-8 col-sm-8 col-12">
				<p class="h3">{{ movieData.title }} <span class="text-muted">({{ movieData.release_date.substring(0, 4) }})</span></p>
				<div class="genre_box">
					<div class="genre_item" v-for="item in movieData.genres">
						<span class="badge badge-pill badge-dark">{{ item.name }}</span>
					</div>
				</div>
				<p>
					{{ movieData.overview }}
				</p>
				<VideoEmbeed :movieId="id" :key="id"></VideoEmbeed>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.movieId,
				movieData: {
					poster_path: '',
					title: '',
					tagline: '',
					release_date: '',
					genres: [],
					overview: '',
					video: ''
				}
			}
		},
		components: {
			VideoEmbeed: () => import('./../components/VideoEmbeed')
		},
		methods: {
			getMovieInfo() {
				this.axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.api_key}`)
					.then( response => {
						this.movieData = {
							poster_path: response.data.poster_path,
							title: response.data.title,
							tagline: response.data.tagline,
							release_date: response.data.release_date,
							genres: response.data.genres,
							overview: response.data.overview,
							video: ''
						}
					})
					.catch( err => console.log(err))
			}
		},
		mounted() {
			this.getMovieInfo()
		}
	}
</script>

<style lang="less">
	.genre {
		&_box {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			margin-bottom: 10px;
		}

		&_item {
			display: inline-block;
			margin-bottom: 5px;

			&:not(:last-child) { margin-right: 5px; }
		}
	}
</style>