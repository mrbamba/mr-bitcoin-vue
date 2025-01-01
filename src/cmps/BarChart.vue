<template>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {
        name: 'BarChart',
        props: ['barData', 'label'],
        components: { Bar },
        data() {
            return {
                chartData: {
                    labels: ['January', 'February', 'March'],
                    datasets: [{ data: [40, 20, 12] }]
                },
                chartOptions: {
                    responsive: true
                }
            }
        },
        methods: {
            transformToChartData(data) {
                // Month names for labels
                const monthNames = [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ];

                // Extract labels and data
                const labels = data.map(item => {
                    const [year, month] = item.month.split('-');
                    return `${monthNames[parseInt(month, 10) - 1]} ${year}`; // "Month Year"
                });

                const chartData = data.map(item => item.average);

                // Format the result as required
                return {
                    labels,
                    datasets: [
                        {
                            data: chartData,
                            label: this.label,
                        }
                    ]
                };
            }
        },
        created(){
            this.chartData = this.transformToChartData(this.barData)
        }
    }
</script>