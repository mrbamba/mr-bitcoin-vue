<template>
    <div v-if="message" :class="message.type" class="user-message">
        <p>{{ message.txt }}</p>
    </div>
</template>
<script>
    import { eventBus } from '@/services/eventBus.service';
    export default {
        data() {
            return {
                message: null
            }
        },
        methods: {
            onUserMessage(msg) {
                this.message = msg
                setTimeout(() => this.message = null, 3000)

            }
        },
        created() {
            // setTimeout()
            eventBus.on('user-msg', this.onUserMessage)


        }


    }
</script>
<style lang="scss">
.user-message {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: #fff;
    color: black;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    min-width: 200px;
}
.success{
    background-color: rgb(30, 182, 124);
    border: 1px solid rgb(64, 150, 117);
    color: white;
}
.error{
    background-color: rgb(234, 75, 75);
    border: 1px solid rgb(136, 44, 44);
    color: white;
}
</style>