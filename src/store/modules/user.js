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
                const user = await userService.getLoggedInUser()
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
        async signupLoginUser({ commit }, { userName }) {
            // console.log(userName)
            try {
                const userToLogin = await userService.setUser(userName)
                // console.log('User to login: ',userToLogin);
                
                commit({ type: 'setUser', user: userToLogin })
            } catch (err) {
                console.error(err)
                throw err
            }
        },
        async addTransferFundsTransaction({ commit }, { contact, amount }) {

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