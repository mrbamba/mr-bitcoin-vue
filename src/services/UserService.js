import user from "@/store/modules/user";
import { storageService } from "./async-storage.service"
import { loadFromStorage, makeId, saveToStorage } from "./util.service";

const ENTITY = 'users'
const ENTITY_LOGGEDIN_USER = 'loggedInUser'

export const userService = {
    getLoggedInUser,
    getEmptyUser,
    setUser,
    signOut,
    addTransferFundsTransaction
}

async function getLoggedInUser() {
    try{
        return JSON.parse(localStorage.getItem(ENTITY_LOGGEDIN_USER)) || null;
    }catch{
        console.error('Error fetching loggedInUser', err)
        return null
    }

}

async function fetchUsersFromStorage() {
    const users = await storageService.query(ENTITY) || []
    // console.log('Users fetched from storage:', users);
    return users
}

function _createUserObjFromName(userName) {
    return {
        _id: makeId(),
        name: userName,
        balance: 100,
        transactions: []
    }
}

async function setUser(userName) {
    // console.log('Running setUser on service', userName);

    const users = await fetchUsersFromStorage() || []
    const existingUserIdx = users.findIndex(user => user.name === userName)
    let loggedInUser
    if(existingUserIdx === -1){
        // console.log('User not found, creating a new user');
        loggedInUser = _createUserObjFromName(userName)
        users.push(loggedInUser)
    }else{
        // console.log('User found in users', users[existingUserIdx]);
        loggedInUser = users[existingUserIdx]
    }

    saveToStorage(ENTITY, users)
    saveToStorage(ENTITY_LOGGEDIN_USER, loggedInUser)

    return loggedInUser
}

function signOut() {
    // console.log('Signing out');

    saveToStorage(ENTITY_LOGGEDIN_USER, null)
}

function getEmptyUser() {
    return {
        _id: makeId(),
        name: '',
        balance: 100,
        transactions: []
    }
}

async function addTransferFundsTransaction(contact, amount) {
    if (!amount) throw new Error('No amount set for transfer')

    const loggedInUser = await getLoggedInUser()
    
    if (!loggedInUser ) throw new Error('No logged in user set for the transfer')
    if (loggedInUser.balance < amount || amount === 0) throw new Error('Not enough coins')

    if(!contact || !contact._id) throw new Error('No contact for transfer')

    const newTransactionToAdd = _createTransaction(contact, amount)

    // Update the user Object
    loggedInUser.transactions.push(newTransactionToAdd)
    loggedInUser.balance -= amount
    
    // Update users Array
    const users = await fetchUsersFromStorage()

    const idx = users.findIndex(user => user._id === loggedInUser._id)
    if (idx === -1) throw new Error('User not found in storage');

    users[idx] = loggedInUser; // Update the user in the users array
    saveToStorage(ENTITY, users); // Save updated users array to storage
    saveToStorage(ENTITY_LOGGEDIN_USER, loggedInUser); // Update logged-in user in storage

    return loggedInUser
}

function _createTransaction(contact, amount) {
    return {
        _id: makeId(),
        toContactId: contact._id,
        toContactName: contact.name,
        timestamp: Date.now(),
        amount
    }
}