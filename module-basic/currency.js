var krw_usd = 1100;

function roundTwoDecimals(amount){
  return Math.round(amount*100)/100;
}

module.exports.getCurrency = function()
{
  return krw_usd;
}

module.exports.updateCurrency = function(new_cur)
{
  krw_usd = new_cur;
}
function currency(amt, src, trg ){
  var rates = {"KRW":1.0, "USD":1100, "EUR":1200};
  var chgAmt = amt*rates[src];
  return chgAmt/rates[trg];
}
module.exports.convertCurrency = function( amt, from, to)
{
  var ret = 0;
  return eval(from+to+"("+amt+");")
  /*if( from == 'usd' && to == 'krw')
    ret = convertUsToKRW(amt);
  else if( from == 'krw' && to == 'usd')
    ret = convertKRWToUs(amt);
  return ret;*/
}

var usdkrw = function(usd){
  return roundTwoDecimals(usd * exports.krw_usd_rate);
};
var krwusd = function( krw ){
  return roundTwoDecimals(krw / exports.krw_usd_rate);
};

var convertKRWToUs = function( krw ){
  return roundTwoDecimals(krw / krw_usd);
}

var convertUsToKRW = function(usd){
  return roundTwoDecimals(usd * krw_usd);
}

module.exports.krw_usd_rate = krw_usd;
