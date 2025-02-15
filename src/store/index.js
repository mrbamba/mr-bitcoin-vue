import { createStore } from 'vuex'
import contactStore from './modules/contact'
import userStore from './modules/user'

const storeOptions = {
    strict: true,
    state() {
        return {

        }
    },
    mutations: {
        increment(state, { by = 1 }) {
            state.count += by
        },
    },
    actions: {
        incrementLater({ commit }, { by }) {
            setTimeout(() => commit({ type: 'increment', by }), 1000)
        }
    },
    modules: {
        contactStore,
        userStore
    }
}

const store = createStore(storeOptions)
export default store