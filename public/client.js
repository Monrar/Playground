
console.log('Client-side code running');

var button = document.getElementById('keyA');
var buttons = document.getElementsByName('control');
buttons.forEach( item => {
  item.addEventListener('click', (e) => {
  console.log('button was clicked');
  var value = item.getAttribute('value');




  (async () => {
    const rawResponse = await fetch('/clicked', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({keyValue: value })
    });
    
  })();




})});