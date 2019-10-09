<template>
	<div id="app">
		<Head></Head>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {
			Head: () => import('./components/Head.vue')
		}
	}
</script>

<style src="./assets/bootstrap.min.css"></style>
<style lang="less">

</style>
