import { contactService } from "@/services/contactService";

export default{
    state(){
        return{
            contact:null,
        }
    },
    mutations:{
        setContacts(state, { contacts }){
            state.contacts = contacts
        },
        removeContact(state, { contactId }){
            state.contacts = state.contacts.filter(contact => contact._id !== contactId)
        }
    },
    getters:{
        contacts(state) {
            return state.contacts
        }
    },
    actions:{
        async loadContacts(context,{filterBy}){
            try{
                const contacts = await contactService.getContacts(filterBy)
                context.commit({type:'setContacts', contacts})
            }catch(err){
                console.error(err)
                throw err
            }
            // console.log('loading contacts', contacts);
            
        },
        async removeContact({ commit}, {contactId}){
            try{
                await contactService.deleteContact(contactId)
                commit({type:'removeContact', contactId})                
            }catch(err){
                console.error(err)
                throw err
            }
        },
    }
}