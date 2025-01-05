<template>
    <section v-if="contact" class="transfer-coins">
        <h1>Transfer coins to {{ contact.name }}</h1>
        <form @submit="onTransferCoins" class="transfer-form">
            <input type="text" id="amount" placeholder="Amount to transfer" v-model="amount" @keypress="isNumber($event)">
            <button :disabled="!amount">Transfer</button>
        </form>
    </section>
</template>
<script>
    import { showErrorMsg, showSuccessMsg } from '@/services/eventBus.service';

    export default {
        props: {
            contact: {
                type: Object,
                required: true,
            },
            maxCoins: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                amount: null,
            }
        },
        methods: {
            onTransferCoins() {
                if (!this.amount || this.maxCoins < this.amount) {
                    showErrorMsg(`Couldn't send coins to ${this.contact.name}, not enough coins.`)
                } else if(isNaN(this.amount)){
                    showErrorMsg('Amount must be a valid number, no other characters allowed.')
                    this.amount = null
                }else {
                    this.$emit('transferCoins', this.amount)
                    this.amount = null
                }
            },
            isNumber(evt){
                console.log(evt.key)
                if(isNaN(evt.key)){
                    evt.preventDefault();
                }
            }
        }

    }
</script>
<style lang="scss">
.transfer-coins {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 25px;

    h1 {
        margin-bottom: 25px;
    }

    form {
        display: flex;
        justify-content: space-around;

        input,
        button {
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid lightgray;
            background-color: lightblue;
        }

        ::placeholder {
            color: black;
        }

        button {
            cursor: pointer;
        }

        button:hover {
            background-color: rgb(92, 189, 218);
            color: white;
            transition: 0.3s;
        }
    }
}
</style>
