'use strict';

/*
    const dataJson =
    {
        "date": "5555 июля",
        "usd": {
        "buyRate": "73,75",
            "sellRate": "75,24"
    },
        "eur": {
        "buyRate": "86,70",
            "sellRate": "88,74"
    }
    }
*/
//const localJson = JSON.stringify(dataJson);

const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:9999/api/hw13');
xhr.send();

xhr.onload = function () {
    //alert(`Загружено: ${xhr.status} ${xhr.responseText}`);

    const dataRates = JSON.parse(xhr.response);
    //console.log(dataRates);

    const dateID = document.getElementById('date');
    dateID.textContent = dataRates.date;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = dataRates.usd.buyRate;
    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = dataRates.usd.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = dataRates.eur.buyRate;
    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = dataRates.eur.sellRate;


};


//xhr.onload = handleSuccess;
/*
function handleSuccess(evt) {

    if (xhr.status!==200) {
        const newDataJson = JSON.parse(evt.responseText);
    }*/

//const dataRates = JSON.parse();


//}


/*

const dateID = document.getElementById('date');
dateID.textContent = dataRates.date;
const usdBuyRate = document.getElementById('usd-buy-rate');
usdBuyRate.textContent = dataRates.usd.buyRate;
const usdSellRate = document.getElementById('usd-sell-rate');
usdSellRate.textContent = dataRates.usd.sellRate;
const eurBuyRate = document.getElementById('eur-buy-rate');
eurBuyRate.textContent = dataRates.eur.buyRate;
const eurSellRate = document.getElementById('eur-sell-rate');
eurSellRate.textContent = dataRates.eur.sellRate;

}

/*

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