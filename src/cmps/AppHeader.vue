<template>
    <div class="app-header">
        <div class="brand">
            <img src="/gold-bitcoin.png" alt="">
            <h1>MrBitcoin</h1>
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/contacts">Contacts</router-link>
            <router-link to="/statistics">Statistics</router-link>
            <!-- <router-link v-if="user" to="/signup">Signup</router-link> -->
            <router-link to="/signup" @click="signOut">{{ signupLinkText }}</router-link>
        </nav>
    </div>
</template>
<script>
    import { userService } from '@/services/userService';

    export default {
        props: {
            user: {
                type: Object,
                required: false,
            }
        },
        data() {
            return {
                // signupLinkText: Signup
            }
        },
        methods: {
            signOut() {
                userService.signOut()
                this.$store.dispatch({ type: 'signoutUser'})
            }
        },
        computed: {
            signupLinkText() {
                return !!this.user ? 'Signout' : 'Signup'
            }
        }
    }
</script>
<style lang="scss">
.app-header {
    display: flex;
    padding: 0px 2rem;
    justify-content: space-between;
    line-height: 100px;

    margin: 0 auto;
    left: 0;
    top: 0;
    min-width: 100vw;
    background-color: lightsteelblue;
    color: white;
    text-align: center;
    height: 100px;

    .brand {
        display: flex;
        flex-direction: row;

        // max-height: 100pxs;
        img {
            // position: fixed;
            max-width: 100px;
            margin-right: 10px;
            // margin-left: 20px;
        }

        h1 {
            font-weight: 900;
            color: rgb(0, 0, 0);
        }
    }

    nav {
        display: flex;

        ul {

            margin: 0;
            padding: 0;
        }

        // justify-content: center;
        // align-items: center;
        // height: 100px;

        a {
            text-decoration: none;
            color: black;
            // text-align: center;
            font-size: 1.5rem;
            padding: 0px 0.5rem;
        }
    }

    .router-link-exact-active {
        color: #fff;
    }
}

/* For Mobile*/
@media (max-width:740px) {
    .app-header {
        justify-content: center;

        .brand {
            display: none;
        }

    }
}
</style>