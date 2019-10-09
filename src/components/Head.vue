<template>
	<div class="bg-light">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<nav class="navbar navbar-light bg-light">
						<router-link :to="{ name: 'home' }" class="navbar-brand mb-0 h1">MovieLoader</router-link>
						<Navbar></Navbar>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {
			Navbar: () => import('./Navbar')
		}
	}
</script>

<style scoped>
	.bg-light:not(.navbar) { margin-bottom: 30px; }
</style>