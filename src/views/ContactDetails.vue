<template>
    <section>
        <section v-if="contact" class="contact-details">
            <a @click="$router.go(-1)">Back</a>
            <img :src="`https://robohash.org/${contact._id}.png`" :alt="contact.name">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.email }}</h3>
            <h3>{{ contact.phone }}</h3>
        </section>
        <h1 v-else>Loading...</h1>

        <section v-if="contact" class="contact-details-actions">
            <RouterLink :to="`/contacts/edit/${contact._id}`" class="edit-link">Edit</RouterLink>
            <button @click="removeContact()">Delete</button>
        </section>

        <TransferCoins v-if="contact" :maxCoins="user.balance" :contact="contact" @transferCoins="transferCoins" />
        <TransactionList v-if="user && contact" :contact="contact" :transactions="transactions" />

    </section>


</template>
<script>
    import TransactionList from '@/cmps/TransactionList.vue';
    import TransferCoins from '@/cmps/TransferCoins.vue';
    import { contactService } from '@/services/contactService';
    import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

    export default {
        data() {
            return {
                contact: null,
            }
        },
        async created() {
            const { _id: contactId } = this.$route.params
            this.contact = await contactService.getContactById(contactId)
        },
        computed: {
            user() {
                return this.$store.getters.user
            },
            transactions() {
                var transactions = this.user.transactions.filter(transaction => transaction.toContactId == this.contact._id).reverse().slice(0, 3)

                return transactions
            }
        },
        methods: {

            async removeContact() {
                const contactId = this.contact._id
                try {
                    await this.$store.dispatch({ type: 'removeContact', contactId })
                    showSuccessMsg(`Successfully removed contact ${contactId}`)
                    this.$router.push('/contacts')
                } catch (err) {
                    showErrorMsg(`Couldn't delete contact ${contactId}`)
                }
            },

            async transferCoins(amount) {
                if (!this.contact) {
                    showErrorMsg('No contact selected for transfer.')
                    return
                }
                try {
                    await this.$store.dispatch({ type: 'addTransferFundsTransaction', contact: this.contact, amount })
                    showSuccessMsg(`Successfully sent coins to ${this.contact.name}`)
                } catch (err) {

                }
                // this.userService.addMove
            }
        },
        components: {
            TransferCoins,
            TransactionList,
        }

    }
</script>
<style lang="scss">
.contact-details {
    a {
        cursor: pointer;
        align-self: flex-start;
        font-size: 1rem;
        padding: 1rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        max-width: 200px;
    }
}

.contact-details-actions {
    display: flex;
    justify-content: space-around;

    a {
        color: black;
        font-size: 1rem;

        :hover {
            color: gray;
        }
    }

    button {
        background: none;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        padding: 16px;
        font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            sans-serif;
    }

    button:hover {
        color: gray;
    }
}
</style>