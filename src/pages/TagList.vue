<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import AppTagCard from "../components/AppTagCard.vue"

export default {
    name: "AppComponent",
    components: {
        AppTagCard
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
    <div class="d-flex flex-wrap justify-content-center align-items-center gap-3">
        <div v-for="tag in this.store.tags">
            <AppTagCard :name="tag.name" :description="tag.description" :color="tag.color" :id="tag.id">
            </AppTagCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di AppComponent
</style>