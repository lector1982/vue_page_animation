<template>
  <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/contacts">Contacts</router-link>
	</nav>

	<div class="radios">
		<label><input type="radio" name="anim" value="fade" v-model="anim" checked> Fade</label>
		<label><input type="radio" name="anim" value="scale" v-model="anim"> Scale</label>
		<label><input type="radio" name="anim" value="slide-left" v-model="anim"> Slide-left</label>
		<label><input type="radio" name="anim" value="slide-right" v-model="anim"> Slide-right</label>
		<label><input type="radio" name="anim" value="slide-down" v-model="anim"> Slide-down</label>
	</div>

<!-- <transition name="fade" appear mode="out-in">
	<router-view />
</transition> -->

<router-view v-slot="{Component}">
	<transition :name="anim" mode="out-in" appear>
		<component :is="Component" />
	</transition>
</router-view>

</template>

<script>

import {ref} from 'vue'

export default {
  name: 'App',
	setup() {
		const anim = ref('fade');

		return {
			anim
		}
	}

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
  padding-top: 30px;
	height: 100vh;
	overflow: hidden;
}
main {
	height: 100%;
	overflow-y: auto;
}
nav {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
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
.radios {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
}
label {
	display: flex;
	align-items: center;
	margin: 0 20px;
	font-size: 1.1rem;
}

/* animations */
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
	transition: .5s ease-in-out;
}

.scale-enter-from,
.scale-leave-to {
	opacity: 0;
	transform: scale(0.2);
}
.scale-enter-active,
.scale-leave-active {
	transition: .5s ease-in-out;
}

.slide-left-enter-from,
.slide-left-leave-to {
	opacity: 0;
	transform: translateX(-100%);
}
.slide-left-enter-active,
.slide-left-leave-active {
	transition: .5s ease-in-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
	opacity: 0;
	transform: translateX(100%);
}
.slide-right-enter-active,
.slide-right-leave-active {
	transition: .5s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
	opacity: 0;
	transform: translateY(100%);
}
.slide-down-enter-active,
.slide-down-leave-active {
	transition: .5s ease-in-out;
}
</style>
