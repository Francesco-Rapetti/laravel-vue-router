<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import AppCard from "./AppCard.vue"

export default {
    name: "AppComponent",
    components: {
        AppCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        doThings() {
            console.log("AppComponent does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="d-flex flex-wrap justify-content-center align-items-center gap-3">
        <div v-for="event in this.store.events">
            <AppCard :name="event.name" :description="event.description" :date="event.date"
                :available_tickets="event.available_tickets" :tags="event.tags" :user="event.user" :id="event.id">
            </AppCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>