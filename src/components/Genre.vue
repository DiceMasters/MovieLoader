<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ name }}</h5>
			<router-link :to="{ name: 'genre', params: { genreId: genreId } }" class="btn btn-primary">К фильмам</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['genreId', 'name']
	}
</script>

<style lang="less" scoped>
	.card {
		margin-bottom: 30px;
	}
</style>