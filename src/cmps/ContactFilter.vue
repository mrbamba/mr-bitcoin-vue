<template>
    <section class="filter">
        <input class="filter-input" v-model="filterBy.term" @input="debounceFilterBy" type="text" placeholder="Search">

    </section>
</template>
<script>
    import { debounce } from '@/services/util.service'
    export default {
        data() {
            return {
                filterBy: { term: '' }
            }
        },
        methods: {
            setFilterBy() {
                this.$emit('filter', this.filterBy)
            }
        },
        computed: {
            debounceFilterBy() {
                return debounce(this.setFilterBy, 300)
            }
        }

    }
</script>
<style lang="scss">
.filter {
    display: flex;
    justify-content: center;
    .filter-input {
        min-width: 400px;
        padding: 1rem;
        border: none;
        background-color: rgb(0, 100, 128);
        color: #fff;
        border-radius: 5px;
    }
    ::placeholder{
        color: #fff;
        opacity: 1;
    }

}
</style>