var currency = require('./currency');

console.log(currency.krw_usd_rate);
currency.krw_usd_rate = 900;
console.log(currency.krw_usd_rate);
console.log('만원 = $' + currency.convertCurrency(10000, 'krw', 'usd'));
console.log('$100 = ' + currency.convertCurrency(100, 'usd', 'krw')+"원");

console.log('환율을 갱신하려면 어떻게 해야할까?');

currency.updateCurrency(1300);
console.log('만원 = $' + currency.convertCurrency(10000, 'krw', 'usd'));
console.log('$100 = ' + currency.convertCurrency(100, 'usd', 'krw')+"원");
