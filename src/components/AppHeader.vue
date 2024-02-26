<script>
import ResultsSearched from './ResultsSearched.vue';
import { state } from '../store.js'
import AppLogo from './AppLogo.vue'


export default {
    name: 'AppHeader',
    data() {
        return {
            state
        }
    },
    methods: {
        searchResults(data) {
            const searchFilm = data;
            const url = state.base_api_url + searchFilm
            console.log(url);
            state.getFilms(url)
            state.error = false
        }

    },
    created() {
        console.log(state.base_api_url)
        state.getFilms(state.base_api_url);

    },
    components: {
        ResultsSearched,
        AppLogo
    }
}
</script>

<template>
    <header>
        <div class="container">

            <!-- Logo -->
            <AppLogo></AppLogo>


            <!-- Search -->
            <ResultsSearched @searched="searchResults"></ResultsSearched>


        </div>
    </header>
</template>



<style scoped>
header {
    min-height: 100px;
    padding: 2rem;

    & .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>