<script>
import FilmSeriesTv from './FilmSeriesTv.vue'

export default {
    name: 'FilmsCard',
    props: ['index', 'dates'],
    components: {
        FilmSeriesTv
    }
}

</script>

<template>
    <section :class='index + "section"'>
        <div class="container">
            <h2>
                {{ index }}
            </h2>
            <div v-if="dates.results.length == 0">
                <h3> There aren't results with this name</h3>
            </div>
            <div v-else class="row">
                <FilmSeriesTv v-for="element in dates.results" :key="element.id" :element="element" :index="index">
                </FilmSeriesTv>
            </div>


        </div>


    </section>
</template>



<style scoped>
.filmssection,
.seriesTvsection {
    width: 100%;
    min-height: 35vh;

    & h2 {
        text-transform: uppercase;
        padding: 1rem;
    }

    & h6 {
        padding: 1rem;
    }

}
</style>