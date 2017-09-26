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
function fillTile(callBack){
  return function(){
    tile.innerHTML = "";
    makeRequest(callBack, printBoard);


    //function to return the information from Reddit
    function printBoard(){
      let data = JSON.parse(this.response);
      //this grabs the array of json data
      let feedArray = data.data.children;
      //forloop to iterate over the json array of object key/value pairs, isolating the nested data key (of the larger 'data' key) *note: confusing key name(s) - 'data' used twice
      for (let i = 0; i < feedArray.length; i++){
        //return the isolated index item from the 'feedArray'
        let dataset = feedArray[i].data;

        //create MAIN tile div to hold all necessary div elements
        let tileMainDiv = document.createElement("div");
        tileMainDiv.className = "tileMainDiv";
        tile.appendChild(tileMainDiv);

        //create link to reddit
        let a = document.createElement("a");
        a.href = dataset.url;
        tileMainDiv.appendChild(a);

////////////////////////////////////////

        //create IMAGE div
        let imgDiv = document.createElement("div");
        imgDiv.className = "imgDiv";
        a.appendChild(imgDiv);

        if(!dataset.preview){
          imgDiv.innerHTML = "";

        }else if(dataset.preview.images[0].variants.gif){
          imgDiv.style.backgroundImage = `url('${dataset.preview.images[0].variants.gif.source.url}')`;
        }else{
          imgDiv.style.backgroundImage = `url('${dataset.preview.images[0].source.url}')`;
        }


        ///TITLE div container
        let title_Div = document.createElement("div");
        titleDiv.className = "title_Div";
        tileMainDiv.appendChild(title_Div);

        //get the permalink to grab the title
        a = document.createElement("a");
        title_Div.appendChild(a);
        a.innerHTML = dataset.title;
        a.href = "https://www.reddit.com" + dataset.permalink;

/////////////////SUBTITLE DIVS////////////

        ///SUBTITLE div container
        var subTitleDiv = document.createElement("div");
        subTitleDiv.className = "subTitleDiv";
        tileMainDiv.appendChild(subTitleDiv);

        ///SUBTITLE - AUTHOR
        let author = document.createElement("div");
        detailsList.appendChild(author);
        author.innerHTML = "by " + feedArray[i].data.author;

        ///SUBTITLE - DATE CREATED
        let date = document.createElement("div");
        detailsList.appendChild(date);
        date.className = "details";
        date.innerHTML = dataset.created_utc;

        ///SUBTITLE - UPVOTES <<<-- *does 'upvotes' replace 'views'?
        let upVotes = document.createElement("div");
        detailsList.appendChild(upVotes);
        upVotes.className = "details";
        upVotes.innerHTML = dataset.ups + " upvotes";
      }
    }
  };
}

myBoardsButton.addEventListener("click", loadBoard("https://www.reddit.com/r/pugs/comments/6ibir9/pug_and_dachshund_mix.json"));
randomButton.addEventListener("click", loadBoard("https://www.reddit.com/r/pugs/comments/72icp4/why_bother_me_when_im_clearly_napping.json"));
getAppButton.addEventListener("click", loadBoard("https://www.reddit.com/r/pugs/comments/72du9f/pug_for_scale.json"));






///////////////IN CLASS CODE W/ED/////////////
//*NOTE: study the way to refactor code to be more modular

//*NOTE: start with the largest function that needs to WORK/FUNCTION


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