<template>
    <section v-if="contact" class="contact-details">
        <a @click="$router.go(-1)">Back</a>
        <img :src="`https://robohash.org/${contact._id}.png`" :alt="contact.name">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
        <h3>{{ contact.phone }}</h3>
    </section>
    <h1 v-else>Loading...</h1>
</template>
<script>
import { contactService } from '@/services/contactService';

    export default {
        data(){
            return{
                contact:null,
            }
        },
        async created(){
            const{_id: contactId } = this.$route.params
            this.contact = await contactService.getContactById(contactId)
            console.log(this.contact);
            
        }

    }
</script>
<style lang="scss">
.contact-details {
    a{
        cursor: pointer;
        align-self: flex-start;
        font-size: 1rem;
        padding: 1rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img{
        max-width: 200px;
    }
}
</style>