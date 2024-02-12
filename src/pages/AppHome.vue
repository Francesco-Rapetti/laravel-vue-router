<script>
import { store } from "../store.js"
export default {
    components: {
    },
    name: "AppHome",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container text-center">
        <div class="row align-items-center">
            <h1>ORGANIZE YOUR EVENTS IN ONE PLACE</h1>
            <p>Organize your events in one place. Create, edit, and delete events.</p>
        </div>

        <div class="row align-items-center">
            <div class="col-6">
                <router-link :to="{ name: 'events' }" class="btn btn-primary w-100">There are {{ store.events.length }}
                    events</router-link>
            </div>
            <div class="col-6">
                <router-link :to="{ name: 'tags' }" class="btn btn-primary w-100">There are {{ store.tags.length }}
                    tags</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.row {
    height: 50vh;
}

h1 {
    font-size: 4rem;
}
</style>