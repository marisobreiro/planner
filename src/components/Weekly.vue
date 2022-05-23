<template>
    <section class="container-fluid d-flex flex-row flex-column flex-lg-row justify-content-center align-itens-center p-5" v-for="weekday of weekdays" :key="weekday">
        <Day Weekday={}} />
    </section>
</template>

<script>
import weekdays from '../services/weekdays'
import Weekdays from '../services/weekdays'

import Day from './Day.vue'
import Weekend from './Weekend.vue'

export default {
    components: {
        Day,
        Weekend,
    },

    data() {
        weekdays = []
    },

    mounted() {
        Weekdays.list().then(resp => {
            console.log(resp.data);
            this.weekdays = resp.data;
        })
    },
}
</script>

<style>
    .day {
        height: 60vh;
        width: 20vw;
        margin-right: 1rem;
        overflow-y: scroll
    }

    .day-weekend {
        height: 30vh;
        width: 15vw;
        overflow-y: scroll
    }

    .tasks {
        width: 100%;
        height: 90%;
    }

    .task {
        width: 100%;
        padding: 0.5rem;
    }
    
    .task:hover {
        background-color: #c4c3c3;
    }

    .task:hover .task__functions{
        display: flex !important;
    }

    .task__functions button {
        border: none;
        background-color: #c4c3c3;
    }

    .day-actions {
        height: 20%;
    }

    @media screen and (max-width: 540px) {
        .day {
            width: 80vw;
        }
    }

</style>


