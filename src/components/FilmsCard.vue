<script>
export default {
    name: 'FilmsCard',
    props: {
        films_card: Object
    }

}
</script>

<template>
    <div class="col">
        <div class="card">
            <ul>
                <li> {{ films_card.title }}</li>
                <li> {{ films_card.original_title }}</li>
                <li> {{ films_card.original_language }}</li>
                <li> {{ films_card.vote_average }}</li>
            </ul>
        </div>
    </div>
</template>



<style scoped>
ul {
    >li {
        list-style: none;
    }
}
</style>