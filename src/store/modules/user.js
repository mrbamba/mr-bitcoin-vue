import { userService } from "@/services/userService";

export default {
    state() {
        return {
            user: null,
        }
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },
        signoutUser(state) {
            state.user = null
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
    actions: {
        async loadUser(context) {
            try {
                const user = await userService.getUser()
                context.commit({ type: 'setUser', user })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        async signoutUser({ commit }) {
            try {
                await userService.signOut()
                commit({ type: 'signoutUser' })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        async signupUser({ commit }, { user }) {
            try {
                await userService.setUser(user)
                commit({ type: 'setUser', user })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        async addTransferFundsTransaction({ commit }, { contact, amount }) {
            console.log('running in store');
            
            try {
                const updatedUser = await userService.addTransferFundsTransaction(contact, amount)
                commit({ type: 'setUser', user: updatedUser })
            } catch (err) {
                console.error(err)
                throw err
            }
        }
    }
}