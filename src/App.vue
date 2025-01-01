<template>
    <UserMessage/>
    <AppHeader />
    <main>
        <RouterView />

    </main>
    <AppFooter />
</template>

<script>
    import AppFooter from './cmps/AppFooter.vue';
    import AppHeader from './cmps/AppHeader.vue';
import UserMessage from './cmps/UserMessage.vue';

    export default {
        components: {
            AppHeader,
            AppFooter,
            UserMessage
        }
    }
</script>
<style scoped>
main {
    /* min-height: 100%; */
    min-height: calc(100vh - 190px);

}
</style>
