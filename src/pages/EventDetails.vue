<script>
import AppEventCard from "../components/AppEventCard.vue";
import { store } from "../store.js"
export default {
    name: "EventDetails",
    components: {
        AppEventCard
    },
    data() {
        return {
            store,
            event: null
        }
    },
    methods: {
        getEvent(id) {
            this.store.events.forEach(event => {
                if (event.id == id) {
                    this.event = event;
                }
            });
        }
    },
    mounted() {
        this.getEvent(this.$route.params.id);
    }
}
</script>

<template>
    <h1 v-if="event" class="text-center">Event {{ event.name }} Details Page</h1>
    <div class="container p-3 bg-dark rounded-3 my-5">
        <table v-if="event" class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Available Tickets</th>
                    <th scope="col">User</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">{{ event.id }}</th>
                    <td>{{ event.name }}</td>
                    <td>{{ event.description }}</td>
                    <td>{{ event.date }}</td>
                    <td>
                        <span v-for="tag in event.tags" class="badge rounded-pill me-2" :class="tag.color">{{ tag.name }}
                        </span>
                    </td>
                    <td>{{ event.available_tickets }}</td>
                    <td v-if="event.user">{{ event.user.name }}</td>
                    <td v-else>No user</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container">
        <div class="row">
            <router-link :to="{ name: 'events' }" class="btn btn-primary">Back to events</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.btn {
    width: 9rem;
}
</style>