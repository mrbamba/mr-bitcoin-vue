import user from "@/store/modules/user";
import { storageService } from "./async-storage.service"
import { loadFromStorage, makeId, saveToStorage } from "./util.service";

const ENTITY = 'user'
const ENTITY_LOGGEDIN_USER = 'loggedInUser'

// const user = {
//     name: "Puki Ben David",
//     balance: 100,
//     transactions: []
// }

export const userService = {
    getUser,
    getEmptyUser,
    setUser,
    signOut,
    addTransferFundsTransaction
}

async function getUser(){
    return await storageService.query(ENTITY)
    
}

function setUser(userToSave){
    saveToStorage(ENTITY, userToSave)
    console.log('Running setUser on service'. userToSave);
}

function signOut(){
    console.log('Signing out');
    
    saveToStorage(ENTITY, null)
}

function getEmptyUser() {
    return {
        name: '',
        balance: 100,
        transactions: []
    }
}

async function addTransferFundsTransaction(contact, amount){
    if(!amount) throw new Error('No amount set for transfer')

    if(!user) throw new Error('No logged in user set for the transfer')

    if (user.balance<amount || amount === 0) throw new Error('Not enough coins')

    const newTransactionToAdd = _createTransaction(contact, amount)
    const updatedUser = await getUser()
    updatedUser.transactions.push(newTransactionToAdd)
    updatedUser.balance -=amount
    console.log('updated user', updatedUser);
    
    setUser(updatedUser)
    return updatedUser
}

function _createTransaction(contact, amount){
    return {
        _id: makeId(),
        toContactId: contact._id,
        toContactName: contact.name,
        timestamp: Date.now(),
        amount
    }
}