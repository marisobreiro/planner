<template>
    <Header />
    <Weekly />
</template>

<script>
import Header from './components/Header.vue';
import Weekly from './components/Weekly.vue';

export default {
    components: {
        Header,
        Weekly,
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Anaheim&display=swap');

    * {
        font-family: 'Anaheim', sans-serif;
    }

    a {
        color: #000000;
        text-decoration: none;
    }

    .subtitle {
        font-size: 1rem;
        text-align: center;
        margin: 2rem 0;
    }
  
    .dbtn {
        background-color: #FFFFFF;
        border: 1px solid #000000;
        color: #000000;
        padding: 0.25rem 0.5rem;
        border-radius: 0.20rem;
        margin-right: 0.5rem;
    }

    .dbtn:hover {
        background-color: #000000;
        color: #FFFFFF;
    }

    input input:active {
        outline-color: none;
    }

</style>