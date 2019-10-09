<template>
	<iframe :src="'https://www.youtube.com/embed/' + this.video" frameborder="0" v-if="video != ''" allow="accelerometer; gyroscope" allowfullscreen class="video"></iframe>
</template>

<script>
	export default {
		props: ['movieId'],
		data() {
			return {
				video: ''
			}
		},
		methods: {
			getVideo() {
				this.axios.get(`https://api.themoviedb.org/3/movie/${this.$props.movieId}/videos?api_key=${this.api_key}`)
					.then( response => {
						this.video = response.data.results.filter( val => (val.type == 'Trailer') && (val.site == 'YouTube') )[0].key
					})
			}
		},
		mounted() {
			this.getVideo()
		}
	}
</script>

<style scoped>
	.video {
		width: 100%;
		height: 300px;
	}
</style>