<template>
  <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contacts">Contacts</router-link>
	</nav>

	<router-view />

</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
nav {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
}
nav a {
	margin: 0 10px;
	text-decoration: none;
	font-size: 1.2rem;
	color:#2c3e50;
}
nav a:hover,
nav a.router-link-active {
	color:tomato;
	text-decoration: underline;
}
h1 {
	margin-bottom: 25px;
}
p {
	text-align: left;
	max-width: 900px;
	margin: 20px auto;
}
img {
	width: 100%;
	max-width: 900px;
	margin: 20px auto;
	display: block;
	height: auto;
}
</style>
