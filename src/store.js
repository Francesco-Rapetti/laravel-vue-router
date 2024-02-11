import { reactive } from 'vue'

export const store = reactive({
    chiave: "valore",
    events: [],
    apiURL: "http://127.0.0.1:8000/api/",
});