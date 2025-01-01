import axios from 'axios'


export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    try{
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')

        return response.data.bpi.USD.rate
    }catch (error){
        console.error('Failed to fetch exchange rate', error);
        throw error
        
    }
}

async function getMarketPriceHistory(){
    try{
        const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        return response.data.values
    }catch (error){
        console.error('Failed to load marketPriceHistory in the Service', error)
        throw error
    }
}

async function getAvgBlockSize(){
    try{
        const response = await axios.get('https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true')
        return response.data.values
    } catch(error){
        console.error('Failed to load avgBlockSize', error)
        throw error
    }
}