import { storageService } from "./async-storage.service";
import { loadFromStorage, saveToStorage } from "./util.service";
const KEY = 'contacts'
_createContacts()

export const contactService = {
    getContacts,
    getContactById,
    deleteContact,
    saveContact,
    getEmptyContact
}

// const contacts = [
//     {
//         "_id": "5a56640269f443a5d64b32ca",
//         "name": "Ochoa Hyde",
//         "email": "ochoahyde@renovize.com",
//         "phone": "+1 (968) 593-3824"
//     },
//     {
//         "_id": "5a5664025f6ae9aa24a99fde",
//         "name": "Hallie Mclean",
//         "email": "halliemclean@renovize.com",
//         "phone": "+1 (948) 464-2888"
//     },
//     {
//         "_id": "5a56640252d6acddd183d319",
//         "name": "Parsons Norris",
//         "email": "parsonsnorris@renovize.com",
//         "phone": "+1 (958) 502-3495"
//     },
//     {
//         "_id": "5a566402ed1cf349f0b47b4d",
//         "name": "Rachel Lowe",
//         "email": "rachellowe@renovize.com",
//         "phone": "+1 (911) 475-2312"
//     },
//     {
//         "_id": "5a566402abce24c6bfe4699d",
//         "name": "Dominique Soto",
//         "email": "dominiquesoto@renovize.com",
//         "phone": "+1 (807) 551-3258"
//     },
//     {
//         "_id": "5a566402a6499c1d4da9220a",
//         "name": "Shana Pope",
//         "email": "shanapope@renovize.com",
//         "phone": "+1 (970) 527-3082"
//     },
//     {
//         "_id": "5a566402f90ae30e97f990db",
//         "name": "Faulkner Flores",
//         "email": "faulknerflores@renovize.com",
//         "phone": "+1 (952) 501-2678"
//     },
//     {
//         "_id": "5a5664027bae84ef280ffbdf",
//         "name": "Holder Bean",
//         "email": "holderbean@renovize.com",
//         "phone": "+1 (989) 503-2663"
//     },
//     {
//         "_id": "5a566402e3b846c5f6aec652",
//         "name": "Rosanne Shelton",
//         "email": "rosanneshelton@renovize.com",
//         "phone": "+1 (968) 454-3851"
//     },
//     {
//         "_id": "5a56640272c7dcdf59c3d411",
//         "name": "Pamela Nolan",
//         "email": "pamelanolan@renovize.com",
//         "phone": "+1 (986) 545-2166"
//     },
//     {
//         "_id": "5a5664029a8dd82a6178b15f",
//         "name": "Roy Cantu",
//         "email": "roycantu@renovize.com",
//         "phone": "+1 (929) 571-2295"
//     },
//     {
//         "_id": "5a5664028c096d08eeb13a8a",
//         "name": "Ollie Christian",
//         "email": "olliechristian@renovize.com",
//         "phone": "+1 (977) 419-3550"
//     },
//     {
//         "_id": "5a5664026c53582bb9ebe9d1",
//         "name": "Nguyen Walls",
//         "email": "nguyenwalls@renovize.com",
//         "phone": "+1 (963) 471-3181"
//     },
//     {
//         "_id": "5a56640298ab77236845b82b",

//         "name": "Glenna Santana",
//         "email": "glennasantana@renovize.com",
//         "phone": "+1 (860) 467-2376"
//     },
//     {
//         "_id": "5a56640208fba3e8ecb97305",
//         "name": "Malone Clark",
//         "email": "maloneclark@renovize.com",
//         "phone": "+1 (818) 565-2557"
//     },
//     {
//         "_id": "5a566402abb3146207bc4ec5",
//         "name": "Floyd Rutledge",
//         "email": "floydrutledge@renovize.com",
//         "phone": "+1 (807) 597-3629"
//     },
//     {
//         "_id": "5a56640298500fead8cb1ee5",
//         "name": "Grace James",
//         "email": "gracejames@renovize.com",
//         "phone": "+1 (959) 525-2529"
//     },
//     {
//         "_id": "5a56640243427b8f8445231e",
//         "name": "Tanner Gates",
//         "email": "tannergates@renovize.com",
//         "phone": "+1 (978) 591-2291"
//     },
//     {
//         "_id": "5a5664025c3abdad6f5e098c",
//         "name": "Lilly Conner",
//         "email": "lillyconner@renovize.com",
//         "phone": "+1 (842) 587-3812"
//     }
// ];

function _createContacts() {
    var contacts = loadFromStorage(KEY)
    if (contacts && contacts.length) return

    contacts = [
        _createContact('5a56640269f443a5d64b32ca', 'Ochoa Hyde', 'ochoahyde@renovize.com', '+1 (968) 593-3824'),
        _createContact('5a5664025f6ae9aa24a99fde', 'Hallie Mclean', 'halliemclean@renovize.com', '+1 (948) 464-2888'),
        _createContact('5a56640252d6acddd183d319', 'Parsons Norris', 'parsonsnorris@renovize.com', '+1 (958) 502-3495'),
        _createContact('5a566402ed1cf349f0b47b4d', 'Rachel Lowe', 'rachellowe@renovize.com', '+1 (911) 475-2312'),
        _createContact('5a566402abce24c6bfe4699d', 'Dominique Soto', 'dominiquesoto@renovize.com', '+1 (807) 551-3258'),
        _createContact('5a566402a6499c1d4da9220a', 'Shana Pope', 'shanapope@renovize.com', '+1 (970) 527-3082'),
        _createContact('5a566402f90ae30e97f990db', 'Faulkner Flores', 'faulknerflores@renovize.com', '+1 (952) 501-2678'),
        _createContact('5a5664027bae84ef280ffbdf', 'Holder Bean', 'holderbean@renovize.com', '+1 (989) 503-2663'),
        _createContact('5a566402e3b846c5f6aec652', 'Rosanne Shelton', 'rosanneshelton@renovize.com', '+1 (968) 454-3851'),
        _createContact('5a56640272c7dcdf59c3d411', 'Pamela Nolan', 'pamelanolan@renovize.com', '+1 (986) 545-2166'),
        _createContact('5a5664029a8dd82a6178b15f', 'Roy Cantu', 'roycantu@renovize.com', '+1 (929) 571-2295'),
        _createContact('5a5664028c096d08eeb13a8a', 'Ollie Christian', 'olliechristian@renovize.com', '+1 (977) 419-3550'),
        _createContact('5a5664026c53582bb9ebe9d1', 'Nguyen Walls', 'nguyenwalls@renovize.com', '+1 (963) 471-3181'),
        _createContact('5a56640298ab77236845b82b', 'Glenna Santana', 'glennasantana@renovize.com', '+1 (860) 467-2376'),
        _createContact('5a56640208fba3e8ecb97305', 'Malone Clark', 'maloneclark@renovize.com', '+1 (818) 565-2557'),
        _createContact('5a566402abb3146207bc4ec5', 'Floyd Rutledge', 'floydrutledge@renovize.com', '+1 (807) 597-3629'),
        _createContact('5a56640298500fead8cb1ee5', 'Grace James', 'gracejames@renovize.com', '+1 (959) 525-2529'),
        _createContact('5a56640243427b8f8445231e', 'Tanner Gates', 'tannergates@renovize.com', '+1 (978) 591-2291'),
        _createContact('5a5664025c3abdad6f5e098c', 'Lilly Conner', 'lillyconner@renovize.com', '+1 (842) 587-3812'),
    ]
    saveToStorage(KEY, contacts)
}

function _createContact(_id, name, email, phone) {
    return {
        _id: _id,
        name: name,
        email: email,
        phone: phone,
    }
}

function sort(arr) {
    console.log('Sort arr: ', arr);
    
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }
        return 0;
    })
}

async function getContacts(filterBy = null) {
    var contacts = await storageService.query(KEY)
    console.log(contacts);
    
    return new Promise(async (resolve, reject) =>  {
        var contactsToReturn = contacts;
        if (filterBy && filterBy.term) {
            contactsToReturn = await filter(filterBy.term)
        }
        console.log(contactsToReturn);
        
        // const filteredContacts = await
        resolve(sort(contactsToReturn))
    })
}

function getContactById(id) {
    return storageService.get(KEY, id)
    // return new Promise((resolve, reject) => {
    //     const contact = contacts.find(contact => contact._id === id)
    //     contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
    // })
}

function deleteContact(id) {
    return storageService.remove(KEY, id)
    // return new Promise((resolve, reject) => {
    //     const index = contacts.findIndex(contact => contact._id === id)
    //     if (index !== -1) {
    //         contacts.splice(index, 1)
    //         // console.log(`Contact with ID ${id} removed. Updated contacts:`, contacts);
    //         resolve(contacts)
    //     } else {
    //         // console.error(`Contact with ID ${id} not found. `)
    //         reject(`Contact with ID ${id} not found. `)
    //     }

    // })
}

// function _updateContact(contact) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(c => contact._id === c._id)
//         if (index !== -1) {
//             contacts[index] = contact
//         }
//         resolve(contact)
//     })
// }

// function _addContact(contact) {
//     return new Promise((resolve, reject) => {
//         contact._id = _makeId()
//         contacts.push(contact)
//         resolve(contact)
//     })
// }

async function saveContact(contact) {
    if (contact._id) return storageService.put(KEY, contact)
    else return storageService.post(KEY, contact)
    // return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
    return {
        name: '',
        email: '',
        phone: ''
    }
}

async function filter(term) {
    term = term.toLocaleLowerCase()
    var contacts = await storageService.query(KEY)
    console.log('Contacts at filter initialized',contacts);

    console.log('Term:', term);
    
    return contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(term) ||
            contact.phone.toLocaleLowerCase().includes(term) ||
            contact.email.toLocaleLowerCase().includes(term)
    })
}



function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}