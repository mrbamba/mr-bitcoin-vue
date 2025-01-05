<template>
    <div class="app-footer">
        <router-link to="/"><h1>MrBitcoin &copy;</h1></router-link>
        
        <router-link to="/">
            <nav>
                <router-link to="/about">About</router-link>

            </nav>
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
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // height: 5vh;

    // max-height: 100px;
    // left: 0;
    // bottom: 0;
    // width: 100%;
    background-color: lightsteelblue;
    color: white;
    text-align: center;
    height: 90px;
    padding: 0 15px;
    line-height: 90px;

    a {
        text-decoration: none;
        color: whitesmoke;
        padding: 0px;

        &:hover {
            color: black;
        }
    }

    h1 {
        margin: 0;
        padding: 0;
    }
}
</style>