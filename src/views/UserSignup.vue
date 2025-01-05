<template>
    <div class="user-signup">
        <h1>Sign up to MrBitcoin</h1>
        <form v-if="user" @submit.prevent="signupUser" class="signup-form">
            <input type="text" id="name" placeholder="What is your name" v-model="user.name">
            <button :disabled="!user.name">Signup</button>
        </form>
    </div>
</template>
<script>
    import { userService } from '@/services/userService.js';

    export default {
        data() {
            return {
                user: userService.getEmptyUser()
            }
        },
        methods: {
            async signupUser() {
                console.log()
                // userService.signup(this.user)
                await this.$store.dispatch({ type: 'signupUser', user:this.user})
                this.$router.push('/')
            }
        },
        created() {
            console.log('user:', this.user)
        }
    }
</script>
<style lang="scss">
.user-signup {
    text-align: center;
    margin: 1rem;
    .signup-form {
        display: flex;
        flex-direction: column;
        padding: 1rem;

        img {
            max-width: 400px;
            margin: 60px auto;
        }

        input,
        button {
            margin: 1rem;
            padding: 0.5rem;
            border-radius: 5px;
            border: none;
            background-color: rgb(206, 233, 242);


        }

        ::placeholder {
            color: black;
            opacity: 1
        }

        button {
            background-color: rgb(41, 148, 184);
            color: white;
        }

        button {
            cursor: pointer;

            &:hover {
                background-color: rgb(18, 110, 141);
            }
        }

        button:disabled {
            color: black;
            background-color: gray;
            cursor: unset;

            &:hover {
                background-color: gray;
            }
        }



    }
}
</style>
