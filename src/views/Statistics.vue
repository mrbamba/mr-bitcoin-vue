<template>
    <div class="statistics-view">
        <h1>Statistics</h1>

        <h2>Market price history</h2>
        <BarChart v-if="marketPriceHistory" :barData="marketPriceHistory" label="Market price history - average by month"/>
        <!-- <pre>{{marketPriceHistory}}</pre> -->
        <h2>Average block size</h2>
        <BarChart v-if="avgBlockSize" :barData="avgBlockSize" label="Average block size by month"/>

        <!-- <pre>{{ avgBlockSize }}</pre> -->
        <!-- <pre>{{ marketPriceHistory }}</pre> -->

    </div>
</template>
<script>
    import BarChart from '@/cmps/BarChart.vue';
    import { bitcoinService } from '@/services/bitcoinService.js';
    export default {
        data() {
            return {
                marketPriceHistoryRaw: null,
                marketPriceHistory: null,

                avgBlockSizeRaw: null,
                avgBlockSize: null,
            }
        },
        async created() {

            try {
                this.marketPriceHistoryRaw = await bitcoinService.getMarketPriceHistory()
                this.marketPriceHistory = this.summarizeDataPerMonth(this.marketPriceHistoryRaw)

            } catch (error) {
                console.error('Failed to load marketPriceHistory:', error)
            }

            try {
                this.avgBlockSizeRaw = await bitcoinService.getAvgBlockSize()
                this.avgBlockSize = this.summarizeDataPerMonth(this.avgBlockSizeRaw)

            } catch (error) {
                console.error('Failed to load avgBlockSize:', error)
            }
        },
        methods: {
            summarizeDataPerMonth(data) {
                // Helper function to get the year and month from a timestamp
                const getYearMonth = (timestamp) => {
                    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
                    return `${date.getFullYear()}-${date.getMonth() + 1}`; // Format: "YYYY-MM"
                };

                const monthlyData = {};

                // Group data by year-month and calculate totals
                data.forEach(({ x, y }) => {
                    const yearMonth = getYearMonth(x);

                    if (!monthlyData[yearMonth]) {
                        monthlyData[yearMonth] = { total: 0, count: 0 };
                    }

                    monthlyData[yearMonth].total += y;
                    monthlyData[yearMonth].count += 1;
                });

                // Calculate the average for each month
                const result = Object.entries(monthlyData).map(([yearMonth, { total, count }]) => {
                    return {
                        month: yearMonth,
                        average: total / count,
                    };
                });

                return result;
            }
        },
        components: {
            BarChart
        }

    }

</script>
<style lang="scss">
.statistics-view {
    h2{
        margin-block-start: 2rem;
    }
    text-align: center;
    padding: 1rem;

}
</style>
