<template>
    <UserMessage />
    <AppHeader :user="user" />
    <main>
        <router-view class="router-view" v-slot="{ Component }">
            <!-- Use a custom transition or fallback to `fade` -->
            <!-- <transition :name="route.meta.transition || 'fade'"> -->
            <transition name="page-slide" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>

    </main>
    <AppFooter />
</template>

<script>
    import AppFooter from './cmps/AppFooter.vue';
    import AppHeader from './cmps/AppHeader.vue';
    import UserMessage from './cmps/UserMessage.vue';
    import user from './store/modules/user';

    export default {
        components: {
            AppHeader,
            AppFooter,
            UserMessage
        },
        created() {
            this.loadUser()
        },
        methods: {
            async loadUser() {
                try {
                    this.$store.dispatch({ type: 'loadUser' })
                } catch (err) {
                    console.error('Failed to load user', err)
                    showErrorMsg('Failed to load user')
                }
            },
        },
        computed: {
            user() {
                return this.$store.getters.user
            }
        }
    }
</script>
<style lang="scss" scoped>

main {
    min-height: calc(100vh - 190px);

    .page-opacity-enter-active, .page-opacity-leave-active{
        transition: 600ms ease all;
    }
    .page-opacity-enter-from, .page-opacity-leave-to{
        opacity: 0;
    }

    min-height: calc(100vh - 190px);
    .page-slide-enter-active, .page-slide-leave-active{
        transition: 400ms ease all;
    }
    .page-slide-enter-from, .page-slide-leave-to{
        opacity: 0;
        transform: translateY(60px);
    }
}
</style>
