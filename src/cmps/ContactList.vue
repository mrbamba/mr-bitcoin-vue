<template>
    <div v-if="contacts" class="contacts-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <RouterLink :to="`/contacts/${contact._id}`">
                    <ContactPreview :contact="contact" @remove="remove" />

                </RouterLink>

            </li>
        </TransitionGroup>
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
        methods: {
            remove(contactId) {
                this.$emit('remove', contactId)
            }
        }

    }
</script>
<style lang="scss">
.contacts-list {

    .list-move,
    /* apply transition to moving elements */
    .list-enter-active,
    .list-leave-active {
        transition: all 0.3s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
    .list-leave-active {
        position: absolute;
    }

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

            a {
                text-decoration: none;
                color: black;
                padding: 0%;
                margin: 0;
            }
        }
    }
}
</style>