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
        $("buttonArea").append("<br>");
    }
};

btnMaker();