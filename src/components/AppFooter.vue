<script>
export default {
    name: 'AppFooter'

}
</script>

<template>
    <footer>
        <div class="container">
            <h3>Questions? Contact us</h3>
            <div class="row">
                <div class="col">
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Investor Relations</a></li>
                        <li><a href="">Ways to Watch</a></li>
                        <li><a href="">Boolflic Originals</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li><a href="">Help Centre</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Terms of Use</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul>
                        <li><a href="">Account</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Media Center</a></li>
                        <li><a href="">Speed Test</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>



<style scoped>
.row {
    justify-content: space-between;

    >.col {
        border: none;
    }

}

li {
    list-style: none;

    >a {
        text-decoration: none;
        color: var(--boolflix-light);
        font-family: cursive;
    }
}
</style>