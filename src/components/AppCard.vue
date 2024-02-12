<script>
export default {
    name: "AppCard",
    props: [
        "name",
        "description",
        "date",
        "available_tickets",
        "tags",
        "user",
        "id"
    ],
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center gap-3">
            <div class="d-flex justify-content-center flex-wrap">
                <div class="card w-100 m-2 glass" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title">{{ name }}</h3>
                        <span v-for="tag in tags" class="badge rounded-pill me-2" :class="tag.color">{{ tag.name }}</span>
                        <p class="card-text my-3">{{ description }}</p>
                        <div><font-awesome-icon icon="fa-solid fa-calendar-days" class="me-2" />{{ date }}</div>
                        <div><font-awesome-icon icon="fa-solid fa-ticket" class="me-2" />{{ available_tickets }}</div>
                        <div v-if="user != null"><font-awesome-icon icon="fa-solid fa-user-large" class="me-2" />{{
                            user.name
                        }}
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 ps-3 justify-self-end justify-content-center">
                        <router-link :to="{ name: 'event-detail', params: { id: id } }"
                            class="btn btn-primary me-3 add-cart-btn w-100 d-flex justify-content-center align-items-center"><font-awesome-icon
                                icon="fa-solid fa-circle-info" class="fs-2 me-2" /> More info</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>