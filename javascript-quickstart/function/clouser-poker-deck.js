function generatePokerDeck(){
  var deck = [];
  var suits = ['H', 'D', 'S', 'C'];
  var ranks = [2,3,4,5,6,7,8,9,'J','Q','K','A']
  for( var i = 0 ; i < suits.length ; i++ )
  {
    for( var j = 0 ; j < ranks.length ; j++)
    {
      deck.push(suits[i]+ranks[j]);
    }
  }
  return deck;
}

function changePosition( arr, p1, p2 )
{
  var temp = arr[p1];
  arr[p1] = arr[p2];
  arr[p2] = temp;
}

function makeSomeDeckFunc()
{
  var spdeck = generatePokerDeck();
  return function()
  {
    //console.log(Math.round(Math.random()*1000)%spdeck.length);
    for( var i = 0 ; i < 20 ; i++ )
      changePosition(spdeck, Math.round(Math.random()*1000)%spdeck.length, Math.round(Math.random()*1000)%spdeck.length);
    console.log(spdeck.join(", "));
    return spdeck;
  }
}

var deck1 = makeSomeDeckFunc()();
var deck2 = makeSomeDeckFunc()();
