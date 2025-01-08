<template>
    <section>
        <h1 class="page-title">Home</h1>
        <section class="home-body">
            <div class="user-data">
                <h1 v-if="user">Welcome {{ user.name }}</h1>
                <h2 v-if="user">Your ballance: {{ user.balance }}</h2>
                <h3 v-if="exchangeRate">Current exchange rate: ${{ exchangeRate }} per Bitcoin</h3>
            </div>
            <TransactionList v-if="user" :transactions="user.transactions"/>

        </section>

    </section>
</template>
<script>
    import TransactionList from '@/cmps/TransactionList.vue';
import { bitcoinService } from '@/services/bitcoinService.js';
    export default {
        data() {
            return {
                exchangeRate: null
            }
        },
        async created() {
            try {
                this.exchangeRate = await bitcoinService.getRate()
            } catch (error) {
                console.error('Failed to load exchange rate:', error)
            }
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        },
        components:{
            TransactionList
        }
    }
</script>
<style lang="scss">

.page-title{
    text-align: center;
    margin-bottom: 1rem;
}
.home-body{
    display: flex;
    .user-data {
        padding: 1rem;
    
    }

}
@media (max-width:950px) {
    .home-body {
        flex-direction: column;
        text-align: center;
    }
}
</style>