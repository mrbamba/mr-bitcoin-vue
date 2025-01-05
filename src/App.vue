<template>
    <UserMessage/>
    <AppHeader :user="user" />
    <main>
        <RouterView />

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
        created(){
            this.loadUser()
        },
        methods:{
            async loadUser() {
                try{
                    this.$store.dispatch({ type: 'loadUser'})
                }catch(err){
                    console.error('Failed to load user', err)
                    showErrorMsg('Failed to load user')
                }
            },
        },
        computed: {
            user(){
                return this.$store.getters.user
            }
        }
    }
</script>
<style scoped>
main {
    /* min-height: 100%; */
    min-height: calc(100vh - 190px);

}
</style>
