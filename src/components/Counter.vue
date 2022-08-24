<template>
	<h1>Counter (Vuex)</h1>
	<h2>StateDirectAccess (count): {{ $store.state.counter.count }}</h2>
	<h2>MapStateComputed (count): {{ countComputed }}</h2>
	<h2>MapState (count): {{ count }}</h2>
	<h2>MapState (lastMutation): {{ lastMutation }}</h2>

	<h2>GetterDirectAccess (squareCount): {{ $store.getters["counter/squareCount"] }}</h2>

	<button @click="increment">+1</button>
	<button @click="incrementBy">+5</button>
	<button @click="randomInt" :disabled="isLoading">Rand</button>


</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	name: "CounterComponent",
	computed: {
		countComputed() {
			return this.$store.state.counter.count;
		},
		...mapState("counter", ["count", "lastMutation", "isLoading"]),
		// ...mapState({
		// 	count: (state) => state.count,
		// 	lastMutation: (state) => state.lastMutation,
		// }),
	},
	methods: {
		increment() {
			this.$store.commit("counter/increment");
		},
		incrementBy() {
			this.$store.commit("counter/incrementBy", 5);
		},
		// ...mapActions("counter", ["incrementRandomInt"]),
		...mapActions("counter", {
			randomInt: "incrementRandomInt",
		}),
	},
};
</script>

<style></style>
