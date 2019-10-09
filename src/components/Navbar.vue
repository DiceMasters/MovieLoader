<template>
	<ul class="navbar-nav">
		<li class="nav-item" v-for="link in links" :key="link.url">
			<router-link class="nav-link" :to="link.url">{{ link.title }}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				links: [
					{ title: 'Все фильмы', url: '/' },
					{ title: 'По жанрам', url: '/genres' }
				]
			}
		}
	}
</script>

<style lang="less">
	.navbar-nav {
		display: flex;
		flex-direction: row;

		li.nav-item:not(:last-child) {
			margin-right: 15px;
		}
	}
</style>