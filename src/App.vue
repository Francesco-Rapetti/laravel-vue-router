<script>
import EventList from "./pages/EventList.vue";
import AppHeader from "./components/AppHeader.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		EventList,
		AppHeader
	},
	data() {
		return {
			store
		}
	},
	mounted() {

		axios.get(this.store.apiURL + "events").then(risultato => {
			if (risultato.status == 200 && risultato.data.success) {
				// console.log(risultato.data.results);
				this.store.events = risultato.data.results;
				// console.log(this.store.events);
			}
		}).catch(errore => {
			console.error(errore);
		});

		axios.get(this.store.apiURL + "tags").then(risultato => {
			if (risultato.status == 200 && risultato.data.success) {
				// console.log("tags" + risultato.data.results);
				this.store.tags = risultato.data.results;
				// console.log(this.store.tags);
			}
		}).catch(errore => {
			console.error(errore);
			// console.log("errore")
		})
	},
	methods: {

	}
}
</script>

<template>
	<AppHeader></AppHeader>
	<main>
		<router-view></router-view>
	</main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}

.card {
	min-height: 300px;
}
</style>