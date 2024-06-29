<script>
import { state } from '../store';
import ActorsFilmsTv from './ActorsFilmsTV.vue'


export default {
    name: 'FilmSeriesTv',
    props: {
        element: Object,
        index: String
    },
    data() {
        return {
            base_images_url: 'https://image.tmdb.org/t/p/',
            size_images: 'w342',
            state
        }
    },
    methods: {
        getFlagClass(languageCode) {

            const lowercaseLanguageCode = languageCode.toLowerCase();
            const flagIconClasses = [
                'us',
                'fr',
                'es',
                'ag',
                'it',
                'de',
                'dk',
                'af',
                'ag',
                'al',
                'ba',
                'bd',
                'pt',
                'sl',
                'sv',
                'cn',
                'pa',
                'tl'

            ];

            if (lowercaseLanguageCode === 'en') {
                return 'flag-icon flag-icon-gb-eng';

            } else if (lowercaseLanguageCode === 'ja') {
                return `flag-icon flag-icon-jp`;

            } else if (flagIconClasses.includes(lowercaseLanguageCode)) {
                return `flag-icon flag-icon-${lowercaseLanguageCode}`;

            } else {
                return 'flag-icon flag-icon-unknown';
            }
        },
        getVuoteActors() {
            state.actors = [];
            state.gone = true;
        }
    },
    components: {
        ActorsFilmsTv
    }

}

</script>

<template>
    <div v-if="state.filter(element.genre_ids)" class="col">
        <div class="card" @mouseleave="this.getVuoteActors()">
            <div>
                <div>
                    <img v-if="element.poster_path == null"
                        src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
                        style="width: 100%;">
                    <img v-else :src="base_images_url + size_images + element.poster_path" alt="">
                </div>
                <div class="card-hide">
                    <ul>
                        <li v-if="index === 'films'">
                            <h4>
                                TITLE: {{ element.title }}
                            </h4>
                            <h4 v-show="element.title != element.original_title">
                                ORIGINAL TITLE: {{ element.original_title }}
                            </h4>

                        </li>
                        <li v-else>
                            <h4>
                                TITLE: {{ element.name }}
                            </h4>
                            <h4 v-show="element.name != element.original_name">
                                ORIGINAL TITLE: {{ element.original_name }}
                            </h4>
                        </li>
                        <li class="stars">
                            <h4 style="padding-right:0.5rem;"> LANGUAGE: </h4>
                            <div :class="getFlagClass(element.original_language)"> </div>
                        </li>
                        <li class="stars">
                            <h4 style="padding-right:0.5rem;"> VOTE: </h4>
                            <div v-for=" i in 5" :key="i">
                                <i v-if="Math.round(element.vote_average / 2) >= i" class="fa-solid fa-star"
                                    style="padding-right: 0.5rem;"></i>
                                <i v-else class="fa-regular fa-star" style="padding-right: 0.5rem;"></i>
                            </div>
                        </li>
                        <li>
                            <h4> OVERVIEW: {{ element.overview.substring(0, 150) }} ... </h4>
                        </li>
                        <li>
                            <ActorsFilmsTv :id="element.id" :index="index"></ActorsFilmsTv>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>



<style scoped>
ul {
    >li {
        list-style: none;
        padding: 0.4rem;

        >h4 {
            padding: 0.3rem 0;
        }

    }
}

.card {
    position: relative;
    min-width: 100%;
    height: 100%;

    & div {
        height: 100%;

        & img {
            width: 100%;
            min-height: 100%;
            transition: opacity 1s ease-in-out;
        }

    }

}

.card:hover img {
    opacity: 0.2;
}

.card-hide {
    position: absolute;
    transition: opacity 1s ease-in-out;
    opacity: 0;
    height: 80%;
    width: 100%;
    padding: 5px;
    top: 8px;
    left: 0;
}

.card:hover .card-hide {
    opacity: 1;
}

.stars {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.flag-icon-unknown {
    background-color: white;
    line-height: 20px;
    max-width: 100%;
}

.flag-icon-unknown::after {
    content: "Unknown";
    color: white;
    font-family: 'Times New Roman', Times, serif;
    font-size: 16px;
    position: absolute;
    transform: translate(37%, 0%);
}
</style>