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
            <!-- Loader until first search -->
            <div class="row" v-if="!state.loading">
                <div v-if="state.error" class="try-again"> Try another search</div>
                <FilmsCard v-else v-for="(dates, index) in state.results" :index="index" :dates="dates">
                </FilmsCard>
            </div>

            <AppLoader v-else></AppLoader>
        </div>
    </main>
</template>



<style scoped>
main {
    background-color: var(--boolflix-grey);
    min-height: 70vh;

    & .try-again {
        color: var(--boolflix-red);
        height: 150px;
        font-size: larger;
        padding: 1rem;

    }
}
</style>