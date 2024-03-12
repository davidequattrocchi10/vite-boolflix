<script>
import { state } from '../store.js'

export default {
    name: 'AppLoader',
    data() {
        return {
            base_images_url: 'https://image.tmdb.org/t/p/',
            size_images: 'w780',
            state
        }
    },
    created(){
        state.fetchPopularMovie();
    }
}
</script>

<template>
    <div class="container">
        <div class="loader">
                <h1>Thank you and welcome to Boolflix.</h1>
                <h3>If you need to search some movies or series, there is a search bar for you.</h3>
                <h2>Unlimited movies, TV shows, and more</h2>
        </div>
        <h3 style="margin-top: 4rem; padding-left: 1rem; color: var(--boolflix-light);"> Movies more popular </h3>
        <div class="row">
            <div class="col" v-for="popular in state.popular_movie" :key="popular.id" :value="popular.id" >
                    <img v-if="popular.poster_path == null"
                        src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
                        style="width: 100%;">
                    <img v-else :src="base_images_url + size_images + popular.poster_path" alt="">
            </div>
        </div>
    </div>

</template>



<style scoped>

.loader {
        text-align: center;

        & h1 {
            padding: 2rem;
            color: var(--boolflix-red);
        }

        & h3 {
            color: var(--boolflix-light);
            padding: 1rem;
            margin: 1rem;
            
        }
        & h2 {
            color: var(--boolflix-red);
            padding: 1rem;
            margin: 1rem;
            
        }
    }

img {
    width: 100%;
    min-height: 100%;
}

</style>