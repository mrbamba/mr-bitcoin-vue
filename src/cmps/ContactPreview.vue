<template>
    <div class="contact-preview" v-if="contact._id">
        <button @click.prevent="onRemoveContact">X</button>
        <img :src="`https://robohash.org/${contact._id}.png`" :alt="contact.name">
        <h2>{{ contact.name }}</h2>
        <RouterLink :to="`/contacts/edit/${contact._id}`" class="edit-link">Edit</RouterLink>
        <!-- <pre>{{ contact }}</pre> -->
    </div>
</template>
<script>
    export default {
        props: {
            contact: {
                type: Object,
                required: true
            }
        },
        methods: {
            onRemoveContact() {
                this.$emit('remove', this.contact._id)
            }
        }

    }
</script>
<style lang="scss">
.contact-preview {
    button {
        align-self: flex-end;
        border: none;
        border-radius: 5px;
        margin: 5px;
        cursor: pointer;
        padding: 5px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightblue;
    min-width: 200px;

    .edit-link {
        text-decoration: none;
        color: black;
        margin-left: 5px;
    }

    img {
        max-width: 100px;
    }
}
</style>