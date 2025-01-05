<template>
    <div class="contacts-index-view">
        <h1>Contacts</h1>
        <section class="top-section">
            <ContactFilter @filter="filterBy" />
            <button @click="$router.push('contacts/edit')">Add contact</button>
        </section>
        <ContactList v-if="contacts" :contacts="contacts" @remove="remove" />
    </div>
</template>
<script>
    import ContactFilter from '@/cmps/ContactFilter.vue';
    import ContactList from '@/cmps/ContactList.vue';
    import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

    export default {
        components: {
            ContactList,
            ContactFilter
        },
        created() {
            this.loadContacts()
        },
        methods: {

            // -------------loadContacts---------
            async loadContacts(filterBy = {}) {
                try{
                    this.$store.dispatch({ type: 'loadContacts', filterBy})
                }catch(err){
                    console.error('Failed to load contacts', err)
                    showErrorMsg('Failed to load contacts')
                }
            },

            // -------------filterBy-------------
            async filterBy(filterBy) {
                await this.loadContacts(filterBy)
            },

            // -------------remove---------------
            async remove(contactId) {
                try {
                    await this.$store.dispatch({type:'removeContact',contactId})
                    showSuccessMsg(`Successfully removed contact ${contactId}`)
                } catch (err) {
                    showErrorMsg(`Couldn't delete contact ${contactId}`)
                }
            }
        },
        computed: {
            contacts(){
                return this.$store.getters.contacts
            }
        }
    }
</script>
<style lang="scss">
.contacts-index-view {
    padding: 1rem;

    h1 {
        margin-bottom: 1rem;
    }

    .top-section {
        display: flex;
        justify-content: space-around;
        padding: 25px;
        width: 100%;

        button {
            border: none;
            border-radius: 5px;
            padding: 0 15px;
            cursor: pointer;
        }
    }

    h1 {
        text-align: center;
    }


}
</style>