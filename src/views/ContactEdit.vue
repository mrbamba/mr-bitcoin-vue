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
            <button :disabled="!contact.name">Save</button>
        </form>
        <h1 v-else>Loading...</h1>

    </div>
</template>
<script>
    import { contactService } from '@/services/contactService';
    import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

    export default {
        data() {
            return {
                contact: null,
            }
        },
        async created() {
            const { _id: contactId } = this.$route.params || null

            if (contactId) {
                this.contact = await contactService.getContactById(contactId)
            } else {
                this.contact = contactService.getEmptyContact()
            }
            console.log(this.contact);

        },
        methods: {
            async onSave() {
                console.log(this.contact);
                // if (this.contact._id) {
                //     showSuccessMsg(`Successfully updated contact ${this.contact._id}`)
                // } else {
                //     showSuccessMsg(`Successfully added contact.`)
                // }
                try {
                    if (this.contact._id) {
                        showSuccessMsg(`Successfully updated contact ${this.contact._id}`)
                    } else {
                        showSuccessMsg(`Successfully added contact.`)
                    }
                    await contactService.saveContact(this.contact)
                } catch (err) {
                    if (this.contact._id) {
                        showErrorMsg(`Couldn't update contact ${this.contact._id}`)
                    } else {
                        showErrorMsg(`Couldn't add contact.`)
                    }

                }

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

disabled {
    color: black;
    background-color: gray;
}

.contact-edit {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1rem;

    // justify-items: center;
    img {
        max-width: 400px;
        margin: 60px auto;
    }

    input,
    button {
        margin: 1rem;
        padding: 0.5rem;
        border-radius: 5px;
        border: none;
        background-color: rgb(206, 233, 242);


    }

    ::placeholder {
        color: black;
        opacity: 1
    }

    button {
        background-color: rgb(41, 148, 184);
        color: white;
    }

    button {
        cursor: pointer;

        &:hover {
            background-color: rgb(18, 110, 141);
        }
    }

    button:disabled {
        color: black;
        background-color: gray;
        cursor: unset;

        &:hover {
            background-color: gray;
        }
    }

}
</style>