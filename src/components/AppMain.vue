<script>
import FilmsCard from './FilmsCard.vue';
import { state } from '../store.js'
import AppLoader from './AppLoader.vue'


export default {
    name: 'AppMain',
    data() {
        return {
            state
        }
    },
    components: {
        FilmsCard,
        AppLoader
    }
}


</script>

<template>
    <main>
        <div class="container">
            <!-- Results number films -->


            <div class="row" v-if="!state.loading">
                <div v-if="state.error" class="try-again"> Try another search</div>
                <!-- Cards -->
                <FilmsCard v-else v-for="film in state.films" :key="film.id + '_film'" :films_card="film">
                </FilmsCard>
            </div>

            <AppLoader v-else></AppLoader>
        </div>
    </main>
</template>



<style scoped>
main {
    background-color: var(--boolflix-grey);
    min-height: 200px;

    & .try-again {
        color: red;
        height: 150px;
        font-size: larger;
        padding: 1rem;

    }
}
</style>