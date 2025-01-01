<template>
    <div class="contacts-index-view">
        <h1>Contacts</h1>
        <section class="top-section">
            <ContactFilter @filter="filterBy" />
            <button @click="$router.push('contacts/edit')">Add contact</button>
        </section>
        <ContactList v-if="contacts" :contacts="reactiveContacts" @remove="remove" />
    </div>
</template>
<script>
    import ContactFilter from '@/cmps/ContactFilter.vue';
    import ContactList from '@/cmps/ContactList.vue';
    import { contactService } from '@/services/contactService';
import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

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
            async loadContacts(filterBy = {}) {
                this.contacts = await contactService.getContacts(filterBy)
            },
            async filterBy(filterBy) {
                await this.loadContacts(filterBy)
            },
            async remove(contactId) {
                try {
                    await contactService.deleteContact(contactId)
                    this.contacts = this.contacts.filter(contact => contact._id !== contactId);
                    showSuccessMsg(`Successfully removed contact ${contactId}`)
                } catch (err) {
                    showErrorMsg(`Couldn't delete contact ${contactId}`)
                }

            }
        },
        computed: {
            reactiveContacts() {
                return this.contacts
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