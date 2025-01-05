<template>
    <div v-if="contacts" class="contacts-list">
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <RouterLink :to="`/contacts/${contact._id}`">
                    <ContactPreview :contact="contact" @remove="remove"/>

                </RouterLink>

            </li>
        </ul>
        <!-- <pre>{{ contacts }}</pre> -->
    </div>
</template>
<script>
    import ContactPreview from './ContactPreview.vue';

    export default {
        props: {
            contacts: {
                type: Object,
                required: true
            }
        },
        components: {
            ContactPreview
        },
        methods:{
            remove(contactId){
                this.$emit('remove', contactId)
            }
        }

    }
</script>
<style lang="scss">
.contacts-list {
    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        // gap: 6px;
        margin: 0 auto;
        list-style: none;
        padding: 0px 10px;

        li {
            display: grid;
            // justify-items: start;
            // padding: 10px;
            margin: 10px auto;
            a{
                text-decoration: none;
                color: black;
                padding: 0%;
                margin: 0;
            }
        }
    }
}
</style>