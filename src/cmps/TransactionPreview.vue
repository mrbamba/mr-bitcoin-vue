<template>
    <div class="transaction-preview">
        <!-- <pre>{{ transaction }}</pre> -->
        <span>
            {{ transaction.amount }} coins were sent
        </span>
        <span v-if="!contact">to {{ transaction.toContactName }}</span>
        <span>on {{ transactionTime }}</span>
    </div>
</template>
<script>
    export default {
        props: {
            contact: {
                type: Object,
                required: false
            },
            transaction: {
                type: Object,
                required: true
            }
        },
        computed:{
            transactionTime(){
                var timestamp = new Date(this.transaction.timestamp)
                
                return `${timestamp.toDateString()} at ${timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`
            },
        },
        created(){
        }
    }
</script>
<style lang="scss" scoped>
.transaction-preview {
    // background-color: lightgoldenrodyellow;
}
</style>