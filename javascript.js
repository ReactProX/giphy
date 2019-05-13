var topics = ["top gun", "anchorman", "tropic thunder", "zoolander", "step brothers", "old school", "neighbors", "this is the end", "superbad"];

//function to populate the page with buttons
function btnMaker(){
    $("#buttonArea").empty();
    for(var i = 0; i < topics.length; i++){
        var btnGen = $("<button>");
        btnGen.addClass("btn btn-info");
        btnGen.text(topics[i]);
        btnGen.attr("search", topics[i]);
        $("#buttonArea").append(btnGen);
    }
};

//onclick to take input from the user
$("#submit").on("click", function(event){
    event.preventDefault();
    var userBtn = $("#input").val().trim();
    topics.push(userBtn);
    btnMaker();
});

//function to generate gifs from giphy api
function gifGen(){
    $("#gif-area").empty();
    var searchTerm = $(this).attr("search");
    var query = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=5PmDPYEfWOkNp9FpuCs03EawwKp4ubJm&limit=10";

    $.ajax({
        url : query,
        method: "GET"
    })
        .then(function(response){
            var result = response.data;
            console.log(result);
            for(var i = 0; i < result.length; i++){
                var newGif = $("<div>");
                newGif.addClass("float-left");
                var rating = result[i].rating;
                var ratingText = $("<p>").text("Rating: " + rating);
                newGif.append(ratingText);
                var movieGif = $("<img>");
                movieGif.addClass("gif");
                movieGif.attr("src", result[i].images.fixed_height_still.url);
                movieGif.attr("state", "still")
                movieGif.attr("still", result[i].images.fixed_height_still.url);
                movieGif.attr("moving", result[i].images.fixed_height.url);
                newGif.append(movieGif);
                $("#gif-area").append(newGif);
            }
        });
}
//function to pause/unpause gifs
function pauseToggle(){
    console.log("clicked")
    var state = $(this).attr("state");
    if(state === "still"){
        $(this).attr("state", "moving");
        $(this).attr("src", $(this).attr("moving"));
    }
    else{
        $(this).attr("state", "still");
        $(this).attr("src", $(this).attr("still"));
    }
};

//onclick for gif search buttons
$(document).on("click", ".btn-info", gifGen);

//onclick for gifs
$(document).on("click", ".gif", pauseToggle);

btnMaker();

var bpm_call = function(song, artist) {
    // Description: convert name of into name of song, artist, bpm
  
    // Inputs:
    //   Example:
    
    // Outputs:
    //   Example:
    
    var query = "https://api.getsongbpm.com/search/?api_key=2a441a2819558dd13072a3f2fd42d9d8&type=both&lookup=song:"+ song + "artist:" + artist
    $.ajax({
      url : query,
      method : "GET"
    })
      .then(function(res){
          var result =  res.search;
          console.log(result);
      })
  }
  
  //UNIT TEST
  bpm_call("enter+sandman", "metallica");