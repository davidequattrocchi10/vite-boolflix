<script>
export default {
    name: 'ResultsSearched',
    emits: ['searched'],
    data() {
        return {
            searchFilm: '',
        }
    }
}
</script>

<template>
    <div class="searched">
        <!-- Add name film in input -->
        <input name='searchFilm' type="text" placeholder="Name film to search" v-model="searchFilm">

        <!-- Click to search -->
        <button @click="$emit('searched', [searchFilm])"> Search </button>
    </div>
</template>



<style scoped>
.searched {

    input,
    button {
        padding: 0.5rem;
        margin: 0.1rem;
        border-radius: 0.25rem;
        border-style: none;
        font-weight: bold;


    }
}
</style>