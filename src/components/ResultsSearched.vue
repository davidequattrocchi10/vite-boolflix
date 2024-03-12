<script>
import { state } from '../store.js'

export default {
    name: 'ResultsSearched',
    emits: ['searched'],
    data() {
        return {
            searchFilm: '',
            state
        }
    },
    created() {
        state.fetchGenresTV(),
        state.fetchGenresMovie()
},
methods:{
    saveSelectedGenre() {
      console.log('Selected Genre Movies and Series Tv:', state.selectedGenre);
    },
    resetselectedGenre(){
        state.selectedGenre = "";
    }
}
}
</script>

<template>
    <div class="searched">
        <!-- Add name film in input -->
        <input name='searchFilm' type="text" placeholder="Film or series to search" v-model="searchFilm">

        <!-- Click to search -->
        <button @click="$emit('searched', [searchFilm])"> Search </button>
    </div>

    <div class="genre">
        <select style="color: var(--boolflix-dark);"  v-model="state.selectedGenre" @change="saveSelectedGenre">
        <option value="" disabled>Genre Series and Movies</option>
        <option style="color: var(--boolflix-grey);" v-for="genre in state.genres_movie_tv" :key="genre.id" :value="genre.id">{{ genre.name }}</option>
        
        </select>
        <button @click="resetselectedGenre()"> Reset </button>
  </div>

</template>



<style scoped>

.searched {
    input,
    button {
        padding: 0.5rem;
        margin: 0.5rem 0.1rem;
        border-radius: 0.25rem;
        border-style: none;
        font-weight: bold;


    }
}
.genre {
    display: flex;
    & select {
        width: 100%; 
        margin: 0.5rem 0.1rem;
        padding: 0.5rem;
        font-size: 12px;
        border: 1px solid var(--boolflix-grey); 
        border-radius: 5px;     
        font-weight: bold;
        
    }
    & button {
        padding: 0.5rem;
        margin: 0.5rem 0.1rem;
        border-radius: 0.25rem;
        border-style: none;
        font-weight: bold;


    }
}
</style>