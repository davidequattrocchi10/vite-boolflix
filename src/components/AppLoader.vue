<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="loader">
                <h1>
                    Thank you and welcome to Boolflix.
                </h1>
                <p>If you need to search some movies or series, there is a search bar for you.</p>
            </div>

        </div>
    </div>
</template>



<style scoped>
.loader {
    height: 70vh;
    text-align: center;

    h1 {
        padding: 2rem;
        margin: 1rem;
        color: var(--boolflix-red);
    }

    p {
        color: var(--boolflix-light);
        padding: 1rem;
        margin: 1rem;
    }
}
</style>