console.log('here we go again');

function makeReq(callBack, URL) {
  var newReq = new XMLHttpRequest();
  newReq.addEventListener("load", callBack);
  newReq.open("GET", URL);
  newReq.send();
}

