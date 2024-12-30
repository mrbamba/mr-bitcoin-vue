<template>
    <div class="app-header">
        <nav>
            <router-link to="/" :class="routerlink">Home</router-link>
            <router-link to="/contacts">Contacts</router-link>
            <router-link to="/statistics">Statistics</router-link>
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
.app-header {
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;

    margin: 0 auto;
    left: 0;
    top: 0;
    width: 100%;
    background-color: lightsteelblue;
    color: white;
    text-align: center;
    height: 100px;

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;

        a {
            text-decoration: none;
            color: black;
            // text-align: center;
            font-size: 1.5rem;
        }
    }
    .router-link-exact-active{
        color: #fff;
    }
}
</style>