<template>
    <div class="home-view">
        <!-- <h1>Home</h1> -->
        <h1>Welcome {{ user.name }}</h1>
        <h2>Your ballance: {{ user.balance }}</h2>
        <h3 v-if="exchangeRate">Current exchange rate: ${{ exchangeRate }} per Bitcoin</h3>
    </div>
</template>
<script>
    import { userService } from '@/services/UserService';
    import { bitcoinService } from '@/services/bitcoinService.js';
    import axios from 'axios';
    export default {
        data() {
            return {
                user: userService.getUser(),
                exchangeRate: null

            }
        },
        async created() {
            try {
                this.exchangeRate = await bitcoinService.getRate()
                console.log('Bitcoin exchange rate:', this.exchangeRate);
            } catch (error) {
                console.error('Failed to load exchange rate:', error)
            }
        }

    }
</script>
<style lang="scss">
.home-view {
    padding: 1rem;

}
</style>