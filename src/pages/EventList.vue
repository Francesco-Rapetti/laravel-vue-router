<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import AppEventCard from "../components/AppEventCard.vue"

export default {
    name: "AppComponent",
    components: {
        AppEventCard
    },
    data() {
        return {
            store,
        }
    },

    mounted() {
        register(this); //per debuggare il componente da console
    }
}
</script>

<template>
    <div v-if="$route.params.name != null" class="container my-5">
        <div class="row">
            <h2>Results for <span class="badge rounded-pill me-2"
                    :class="store.tags.filter(tag => tag.name == $route.params.name)[0].color">{{ $route.params.name
                    }}</span> tag</h2>
        </div>
    </div>

    <div class="d-flex flex-wrap justify-content-center align-items-center">

        <div v-for="event in this.store.events">
            <!-- <h1>{{ event.tags.filter(tag => tag.name == $route.params.name) }}</h1> -->
            <AppEventCard v-if="$route.params.name == null" :name="event.name" :description="event.description"
                :date="event.date" :available_tickets="event.available_tickets" :tags="event.tags" :user="event.user"
                :id="event.id">
            </AppEventCard>

            <AppEventCard
                v-if="$route.params.name != null && event.tags.filter(tag => tag.name == $route.params.name).length > 0"
                :name="event.name" :description="event.description" :date="event.date"
                :available_tickets="event.available_tickets" :tags="event.tags" :user="event.user" :id="event.id">
            </AppEventCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>