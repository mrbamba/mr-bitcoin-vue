<template>
    <div>
        <a @click="$router.go(-1)">Back</a>

        <form v-if="contact" @submit.prevent="onSave" class="contact-edit">
            <img :src="`https://robohash.org/${contact._id}.png`" :alt="contact.name">

            <label for="name">Name:</label>
            <input id="name" v-model="contact.name" type="text" placeholder="Name">

            <label for="email">Email:</label>
            <input v-model="contact.email" type="email" placeholder="Email">

            <label for="phone">Phone:</label>
            <input v-model="contact.phone" type="phone" placeholder="Phone">
            <button>Save</button>
        </form>
        <h1 v-else>Loading...</h1>

    </div>
</template>
<script>
    import { contactService } from '@/services/contactService';
    export default {
        data() {
            return {
                contact: null,
            }
        },
        async created() {
            const { _id: contactId } = this.$route.params

            if (contactId) {
                this.contact = await contactService.getContactById(contactId)
            } else {
                this.contact = contactService.getEmptyContact()
            }
        },
        methods: {
            async onSave() {
                await contactService.saveContact(this.contact)
                this.$router.go(-1)
            }
        }

    }
</script>
<style lang="scss">
a {
    cursor: pointer;
    align-self: flex-start;
    font-size: 1rem;
    padding: 1rem;

    &:hover {
        color: gray;
    }
}

.contact-edit {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;

    // justify-items: center;
    img {
        max-width: 400px;
    }

    input,
    button {
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: rgb(206, 233, 242);
    }

    button {
        cursor: pointer;

        &:hover {
            background-color: gray;
            color: white;
        }
    }
}
</style>