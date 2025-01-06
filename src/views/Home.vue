<template>
    <div class="home-view">
        <!-- <h1>Home</h1> -->
        <h1 v-if="user">Welcome {{ user.name }}</h1>
        <h2 v-if="user">Your ballance: {{ user.balance }}</h2>
        <h3 v-if="exchangeRate">Current exchange rate: ${{ exchangeRate }} per Bitcoin</h3>
    </div>
</template>
<script>
    import { userService } from '@/services/userService.js';
    import { bitcoinService } from '@/services/bitcoinService.js';
    import axios from 'axios';
    export default {
        data() {
            return {
                // user: '',
                exchangeRate: null

            }
        },
        async created() {
            try {
                this.exchangeRate = await bitcoinService.getRate()
                // console.log('Bitcoin exchange rate:', this.exchangeRate);
            } catch (error) {
                console.error('Failed to load exchange rate:', error)
            }


            // try {
            //     this.user = await userService.getUser()
            //     console.log(this.user);
            // } catch (error) {
            //     console.error('No signedup user')
            // }
            // if (!this.user.name) {
            //     this.$router.push('/signup')
            // }

        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        }

    }
</script>
<style lang="scss">
.home-view {
    padding: 1rem;

}
</style>