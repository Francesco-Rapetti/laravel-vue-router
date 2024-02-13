<script>
import { router } from "../router";
import { store } from "../store.js"
export default {
    name: "AppHeader",
    data() {
        return {
            store,
            menuItems: [
                {
                    name: "Home",
                    url: "/"
                },
                {
                    name: "About",
                    url: "/about"
                },
                {
                    name: "Events",
                    url: "/events"
                },
                {
                    name: "Tags",
                    url: "/tags"
                }
            ]
        };
    },
    components: { router }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light position-fixed w-100">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold" href="/">EVENT MANAGER</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link v-for="item in menuItems" class="nav-link rounded-3" :to="item.url">{{ item.name
                    }}</router-link>
                </div>
            </div>
        </div>
    </nav>
    <div class="spacer"></div>
</template>

<style scoped lang="scss">
.spacer {
    padding-bottom: 80px;
}

nav {
    z-index: 99999;
}

.router-link-active {
    background-color: #dcb0d0 !important;
}
</style>