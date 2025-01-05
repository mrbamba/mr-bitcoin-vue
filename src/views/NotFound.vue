<template>
    <div class="not-found">
        <h1>Not found</h1>

        <p>Oops, we couldn't find that page. Try going<router-link to="/">Home</router-link></p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
.not-found {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 1rem;
}
</style>