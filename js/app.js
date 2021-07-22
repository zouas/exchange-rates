'use strict';

function updateExchangeRates(update) {
    const dateID = document.getElementById('date');
    dateID.textContent = update.date;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = update.usd.buyRate;
    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = update.usd.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = update.eur.buyRate;
    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = update.eur.sellRate;
}
/*
const update = {
    date: '33 августа',
    usd: {
        buyRate: '55,55',
        sellRate: '66,66',
    },
    eur: {
        buyRate: '88,88',
        sellRate: '99,99',
    }
}
updateExchangeRates(update); */