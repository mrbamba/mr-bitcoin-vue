<template>
    <!-- <transition name="slide-fade"> -->
        <Transition>
        <div v-if="message" :class="message.type" class="user-message">
            <p>{{ message.txt }}</p>
        </div>
    
    </transition>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}



------- Bounce
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>