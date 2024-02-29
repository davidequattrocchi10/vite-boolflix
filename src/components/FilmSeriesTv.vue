<script>

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
            hover: false,
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
    }
}

</script>

<template>
    <div class="col">
        <div class="card">
            <div>
                <img v-if="element.poster_path == null"
                    src="https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-thumbnail-graphic-illustration-vector-png-image_40966590.jpg"
                    style="width: 100%;">
                <img v-else :src="base_images_url + size_images + element.poster_path" alt="">
            </div>
            <div class="card-hide">
                <ul>
                    <li v-if="index === 'films'">
                        <h3>
                            Title: {{ element.title }}
                        </h3>
                        <h3 v-show="element.title != element.original_title">
                            Original title: {{ element.original_title }}
                        </h3>

                    </li>
                    <li v-else>
                        <h3>
                            Title: {{ element.name }}
                        </h3>
                        <h3 v-show="element.name != element.original_name">
                            Original title: {{ element.original_name }}
                        </h3>
                    </li>
                    <li class="stars">
                        <h3 style="padding-right:0.5rem;"> Language: </h3>
                        <div :class="getFlagClass(element.original_language)"> </div>
                    </li>
                    <li class="stars">
                        <h3 style="padding-right:0.5rem;"> Vote: </h3>
                        <div v-for=" i in 5" :key="i">
                            <i v-if="Math.round(element.vote_average / 2) >= i" class="fa-solid fa-star"
                                style="padding-right: 0.5rem;"></i>
                            <i v-else class="fa-regular fa-star" style="padding-right: 0.5rem;"></i>
                        </div>
                    </li>
                    <li>
                        <h3> Overview: {{ element.overview.substring(0, 300) }} ... </h3>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>



<style scoped>
.card {
    position: relative;
    min-width: 100%;
    height: 100%;

    & div {
        height: 100%;

        & img {
            width: 100%;
            min-height: 100%;
        }

    }




}

.card:hover img {
    opacity: 0.2;
}

.card-hide {
    position: absolute;
    display: none;
    height: 80%;
    width: 100%;
    padding: 5px;
    top: 8px;
    left: 0;

}

.card:hover .card-hide {
    display: block;
    /* @mouseover="showInfo" @mouseleave="hideInfo" */
}

.stars {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

ul {
    >li {
        list-style: none;
        padding: 0.5rem;

        >h3 {
            font-size: large;
            padding: 0.5rem 0;
        }

    }
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