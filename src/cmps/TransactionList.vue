<template>
    <section>
        <h2 v-if="contact">Last 3 transactions to {{ contact.name }}</h2>
        <h2 v-else>Your transactions:</h2>
        <ul class="transaction-list">
            <li v-for="transaction in transactions" :key="transaction._id">
                <TransactionPreview :transaction="transaction" :contact="contact" />
            </li>
        </ul>
        <h3 v-if="!transactions[0] ">No transactions exist to contact yet.</h3>

    </section>
</template>
<script>
    import TransactionPreview from '@/cmps/TransactionPreview.vue'
    export default {
        props: {
            contact: {
                type: Object,
                required: false
            },
            transactions: {
                type: Array,
                required: true
            }
        },
        components: {
            TransactionPreview
        }
    }
</script>
<style lang="scss" scoped>
section{
    h2 {
        text-align: center;
    }
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    .transaction-list {
        list-style: none;
    
    }
    
}
</style>