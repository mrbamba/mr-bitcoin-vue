<template>
    <div class="contacts-index-view">
        <h1>Contacts</h1>
        <ContactFilter @filter="filterBy"/>
        <ContactList v-if="contacts" :contacts="reactiveContacts" @remove="remove" />
    </div>
</template>
<script>
    import ContactFilter from '@/cmps/ContactFilter.vue';
import ContactList from '@/cmps/ContactList.vue';
    import { contactService } from '@/services/contactService';

    export default {
        data() {
            return {
                contacts: []
            }
        },
        components: {
            ContactList,
            ContactFilter
        },
        created() {
            this.loadContacts()
        },
        methods: {
            async loadContacts(filterBy={}) {
                this.contacts = await contactService.getContacts(filterBy)
            },
            async filterBy(filterBy){
                await this.loadContacts(filterBy)
            },
            async remove(contactId) {
                try {
                    console.log(this.contacts.length);
                    await contactService.deleteContact(contactId)
                    this.contacts = this.contacts.filter(contact => contact._id !== contactId);
                } catch (err) {
                    alert('Something went wrong with deletion.')
                }

            }
        },
        computed:{
            reactiveContacts(){
                return this.contacts
            }
        }
    }
</script>
<style lang="scss">
.contacts-index-view {
    h1 {
        text-align: center;
    }

    padding: 1rem;

}
</style>