<template>
    <div class="user-signup">
        <h1>Signup/Login to MrBitcoin</h1>
        <form @submit.prevent="signupUser" class="signup-form">
            <input type="text" id="name" placeholder="What is your name" v-model="userName">
            <button :disabled="!userName">Signup</button>
        </form>
        <p>*Previously logged in users will be retrieving their previous account.</p>
    </div>
</template>
<script>
    import { userService } from '@/services/userService.js';

    export default {
        data() {
            return {
                userName: ''
            }
        },
        methods: {
            async signupUser() {
                console.log()
                // userService.signup(this.user)
                await this.$store.dispatch({ type: 'signupLoginUser', userName:this.userName})
                this.$router.push('/')
            }
        },
        created() {
            // console.log('user:', this.userName)
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
