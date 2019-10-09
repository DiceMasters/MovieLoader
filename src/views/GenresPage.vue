<template>
	<div class="container">
		<Genres></Genres>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {
			Genres: () => import('./../components/Genres')
		}
	}
</script>
