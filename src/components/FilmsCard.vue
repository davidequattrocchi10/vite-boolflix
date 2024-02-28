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
            <div class="row">

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

}

h2 {
    text-transform: uppercase;
    padding: 1rem;
}
</style>