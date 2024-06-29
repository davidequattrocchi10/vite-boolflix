<script>
import axios from 'axios';
import {
    state
} from '../store';
export default {
    name: 'ActorsFilmsTv',
    data() {
        return {
            state,
            movie: "movie/",
            tv: "tv/",

        }
    },
    props: {
        id: Number,
        index: String
    },
    methods: {
        searchResultsActors() {
            state.gone = false;
            const url_actor_filmsTv = (this.index === 'films')
                ? state.base_url + this.movie + this.id + state.key_actors
                : state.base_url + this.tv + this.id + state.key_actors;
            axios.get(url_actor_filmsTv)
                .then(response => {
                    state.actors = response.data.cast.slice(0, 5);
                })
                .catch(error => {
                    console.error(error);
                })

        },
        searchResultsGenres() {
            state.gone = false
            const url_genre_filmsTv = (this.index === 'films')
                ? state.base_url + this.movie + this.id + state.api_key
                : state.base_url + this.tv + this.id + state.api_key;
            axios.get(url_genre_filmsTv)
                .then(response => {
                    state.genres = response.data.genres.slice(0, 5);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
}
</script>


<template>
    <button v-if="state.gone" @click="this.searchResultsActors(); this.searchResultsGenres()">
        Click here for other info
    </button>
    <div v-else>
        <h4>Actors: </h4>
        <li v-for="actor in state.actors">
            {{ actor.name }}
        </li>
        <h4>Genres: </h4>
        <li v-for="genre in state.genres">
            {{ genre.name }}

        </li>
    </div>
</template>



<style scoped>
h4 {
    padding: 0.3rem 0;
    text-decoration: underline;
}
</style>