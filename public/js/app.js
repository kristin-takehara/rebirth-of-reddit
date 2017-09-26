console.log('here we go again');

//make XHR request
function makeReq(URL, callBack) {
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

function buildSubreddit(subreddit) {
  //variables
  let parent = document.getElementById('root');

  //get subreddit data
  let query = { url: `http://www.reddit.com/r/${subreddit}.json`};
  request(query, function() {
    let response = JSON.parse(this.responseText);
    let posts = response.data.children;

    //replace with children
    parent.innerHTML = '';
    posts.forEach((post)) => {
      // let postElement = buildPost(post);
      parent.appendChild(postElement);
      console.log(post.data);
      }
  };
      function buildPost(post){
        console.log(posts);
  }



}