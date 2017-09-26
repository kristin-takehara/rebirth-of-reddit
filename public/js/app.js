console.log('here we go again');

//callBack function for XMLH
function makeReq(callBack, URL) {
  let newReq = new XMLHttpRequest();
  newReq.addEventListener("load", callBack);
  newReq.open("GET", URL);
  newReq.send();
}

//request Element from the data
function requestElement(htmlElement) {
  return function() {
    let data = JSON.parse(this.responseText);
  };
}

//append the dynamically retrieved element to the proper html element.
function assignElement (elementName, className, appendTo){
  elementName.class = className;
  appendTo.appendChild(elementName);
}
