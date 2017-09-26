console.log('here we go again');

//Navigation Menu Buttons:
//RANDOM
const randomButton = document.getElementById("random");
//MY BOARDS
const myBoardsButton = document.getElementById("myboards");
//GET THE APP
const getAppButton = document.getElementById("getapp");
//CONTENT FROM REDDIT
const tile = document.getElementById("content");




//Function to execute XHR request
function makeRequest(Url, callBack){
  let newReq = new XMLHttpRequest();
  newReq.addEventListener("load", callBack);
  newReq.open("GET", Url);
  newReq.send();
}

//Function to fill each tile with Subreddit content
function fillTile(cb){
  return function(){

    tile.innerHTML = "";
    makeRequest(cb, printBoard);

    function printBoard(){
      let data = JSON.parse(this.response);
      var feedArray = data.data.children;

      for (let i = 0; i < feedArray.length; i++){

        var dataset = feedArray[i].data;

        let parentDiv = document.createElement("DIV");
        parentDiv.className = "feedDiv";
        tile.appendChild(parentDiv);

        let a = document.createElement("A");
        a.href = dataset.url;
        parentDiv.appendChild(a);

        let picDiv = document.createElement("DIV");
        picDiv.className = "photoDiv";
        a.appendChild(picDiv);

        if(!dataset.preview){
          picDiv.innerHTML = "";

        }else if(dataset.preview.images[0].variants.gif){
          picDiv.style.backgroundImage = `url('${dataset.preview.images[0].variants.gif.source.url}')`;
        }else{
          picDiv.style.backgroundImage = `url('${dataset.preview.images[0].source.url}')`;
        }

        let titleDiv = document.createElement("DIV");
        titleDiv.className = "titleDiv";
        parentDiv.appendChild(titleDiv);

        a = document.createElement("a");
        titleDiv.appendChild(a);
        a.innerHTML = dataset.title;
        a.href = "https://www.reddit.com" + dataset.permalink;

        var subTitleDiv = document.createElement("DIV");
        subTitleDiv.className = "subTitleDiv";
        parentDiv.appendChild(subTitleDiv);
        let detailsList = document.createElement("UL");
        subTitleDiv.appendChild(detailsList);
        detailsList.className = "detailsList";
        let author = document.createElement("LI");
        detailsList.appendChild(author);
        author.innerHTML = "by " + feedArray[i].data.author;
        let date = document.createElement("LI");
        detailsList.appendChild(date);
        date.className = "details";
        date.innerHTML = dataset.created_utc;
        let upVotes = document.createElement("LI");
        detailsList.appendChild(upVotes);
        upVotes.className = "details";
        upVotes.innerHTML = dataset.ups + " upvotes";
      }
    }
  };
}

myBoardsButton.addEventListener("click", loadBoard("http://www.reddit.com/r/catpics.json"));
randomButton.addEventListener("click", loadBoard("http://www.reddit.com/r/mountainsporn.json"));
getAppButton.addEventListener("click", loadBoard("http://www.reddit.com/r/TravelPorn.json"));
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About



// function buildSubreddit(subreddit) {
//   //variables
//   let parent = document.getElementById('root');

//   //get subreddit data
//   let query = { url: `http://www.reddit.com/r/${subreddit}.json`};
//   request(query, function() {
//     let response = JSON.parse(this.responseText);
//     let posts = response.data.children;

//     //replace with children
//     parent.innerHTML = '';
//     posts.forEach((post)) => {
//       // let postElement = buildPost(post);
//       parent.appendChild(postElement);
//       console.log(post.data);
//       }
//   };
//       function buildPost(post){
//         console.log(posts);
//   }



// }