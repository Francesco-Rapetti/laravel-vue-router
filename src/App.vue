<script>
import AppComponent from "./components/AppComponent.vue";

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management

export default {
	components: {
		AppComponent
	},
	data() {
		return {
			store
		}
	},
	mounted() {

		axios.get(this.store.apiURL + "events").then(risultato => {
			if (risultato.status == 200 && risultato.data.success) {
				console.log(risultato.data.results);
				this.store.events = risultato.data.results;
				console.log(this.store.events);
			}
		}).catch(errore => {
			console.error(errore);
		});
	},
	methods: {

	}
}
</script>

<template>
	<main>
		<div class="d-flex flex-wrap justify-content-center align-items-center gap-3">
			<div v-for="event in store.events" class="card h-100" style="width: 18rem;">
				<div class="card-header">
					{{ event.id + " - " + event.name }}
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">DESCRIPTION:</li>
					<li class="list-group-item">{{ event.description }}</li>
					<li class="list-group-item">AVAILABLE TICKETS:</li>
					<li class="list-group-item">{{ event.available_tickets }}</li>
					<!-- <li class="list-group-item">CREATED AT:</li>
					<li class="list-group-item">{{ event.created_at }}</li>
					<li class="list-group-item">UPDATED AT:</li>
					<li class="list-group-item">{{ event.updated_at }}</li> -->
					<li v-if="event.tags" class="list-group-item">TAGS:</li>
					<li v-for="tag in event.tags" class="list-group-item">{{ tag.name }}</li>
					<li v-if="event.user_id" class="list-group-item">USER:</li>
					<li v-if="event.user_id" class="list-group-item">{{ event.user.name }}</li>
				</ul>
			</div>
		</div>
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