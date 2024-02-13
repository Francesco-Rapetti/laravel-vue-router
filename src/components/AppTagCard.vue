<script>
export default {
    name: "AppEventCard",
    props: [
        "name",
        "description",
        "color",
        "id"
    ],
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center gap-3">
            <div class="d-flex justify-content-center flex-wrap p-0 ">
                <div class="card w-100 m-2 glass" style="width: 18rem;">
                    <div class="card-body">
                        <h3 class="card-title"><span class="badge rounded-pill me-2" :class="color">{{ name }}</span></h3>
                        <p class="card-text my-3">{{ description }}</p>
                    </div>
                    <div class="d-flex align-items-center mb-3 ps-3 justify-self-end justify-content-center">
                        <router-link :to="{ name: 'tag-events', params: { name: name } }"
                            class="btn btn-primary me-3 add-cart-btn w-100 d-flex justify-content-center align-items-center"><font-awesome-icon
                                icon="fa-regular fa-calendar" class="fs-2 me-2" />Show related events</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>