<script>
export default {
    name: 'FilmSeriesTv',
    props: {
        element: Object,
        index: String
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
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card">
            <ul>
                <li v-if="index === 'films'">
                    <h3>
                        {{ element.title }}
                    </h3>
                    <h6>{{ element.original_title }}</h6>

                </li>
                <li v-else>

                    <h3>
                        {{ element.name }}
                    </h3>
                    <h6>
                        {{ element.original_name }}
                    </h6>
                </li>
                <li>
                    <div :class="getFlagClass(element.original_language)"></div>
                </li>
                <li> {{ element.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>



<style scoped>
ul {
    >li {
        list-style: none;
        padding: 0.5rem;

        >h3 {
            font-size: large;
            padding: 0.5rem 0;
        }

        >h6 {
            font-size: small;
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