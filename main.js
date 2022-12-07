let btc = 0;
let usd = 1;

function mineBTC(){
    btc +=.01;
    

    
    document.getElementById('btc-count').innerHTML = "BTC: "+ btc.toFixed(3)
    console.log(btc)

}

