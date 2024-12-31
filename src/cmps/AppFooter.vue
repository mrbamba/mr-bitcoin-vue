<template>
    <div class="app-footer">
        <router-link to="/">
            <h1>MrBitcoin &copy;</h1>
        </router-link>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
.app-footer {
    // text-align: center;
    // vertical-align: middle;
    // line-height: 100px;
    max-height: 100px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: lightsteelblue;
    color: white;
    text-align: center;

    a {
        text-decoration: none;
        color: whitesmoke;

        &:hover {
            color: black;
        }
    }
}
</style>