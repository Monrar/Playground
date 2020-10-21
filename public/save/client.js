//const { json } = require("body-parser");
//const bodyParser = require('body-parser')

console.log('Client-side code running');

const button = document.getElementById('keyA');
button.addEventListener('click', (e) => {
  console.log('button was clicked');





  (async () => {
    const rawResponse = await fetch('/clicked', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({keyValue: 'x'})
    });
    //const content = await rawResponse.json();
  
   // console.log(content);
  })();




  //fetch('/clicked', {method: 'POST', 
  //              headers: {'content-type' : 'application/json'},
                //Type: 'application/json',
                //body: JSON.stringify({keyvalue: "z"},
  //              json: {keyvalue: 'x'}})
  //  .then(function(response) {
  //    if(response.ok) {
  //      console.log('Click was recorded');
  //      return;
  //    }
  //    throw new Error('Request failed.');
  //  })
  //  .catch(function(error) {
  //    console.log(error);
  //  });


});