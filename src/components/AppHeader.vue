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

            const url_films = state.base_api_url_film + data;
            const url_SeriesTv = state.base_api_url_series_tv + data;

            Promise
                .all([state.getFilms(url_films), state.getSeriesTv(url_SeriesTv)])
                .then(([films, seriesTv]) => {
                    state.results.films = films.data
                    state.results.seriesTv = seriesTv.data
                    state.loading = false;
                    console.log(state.results.films);
                    console.log(state.results.seriesTv);
                })
        },

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
        flex-wrap: wrap;
    }
}
</style>