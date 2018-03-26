$( document ).ready(function() {

//Gif array (for inital state buttons)
let moods = ["happy", "bummed", "sassy", "dance"]

//API Key: BIfCy45pXxtSMHZmseg1sl3mX3WxDuYV

function showTheGifs(){

let moodChoice = $(this).attr("gif-name")
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BIfCy45pXxtSMHZmseg1sl3mX3WxDuYV&q=" + moodChoice + "&limit=25&offset=0&rating=G&lang=en";
$(".js-gifDump").empty();

//Jquery AJAX call 
$.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    console.log(response);
    //$(".js-gifDump").text(JSON.stringify(response));
    let data = response.data;
    for (var i = 0; i < data.length; i++) {
        var image = $("<img>")
        image.attr("src", response.data[i].images.original.url);
        $(".js-gifDump").append(image);
    }
  });
}

// To display gifs
function buttonDisplay() {

    $(".js-GifButtons").empty();

    for (var i = 0; i < moods.length; i++) {
    
    var button = $("<button>");
    button.addClass("moodChoice");
    button.attr("gif-name", moods[i]);
    button.text(moods[i]);
    $(".js-GifButtons").append(button);
    }
}


 $("#add-mood").on("click", function(event) {
    event.preventDefault();

    //For getting input
    let gifInput = $(".gif-input").val().trim();

    // Adding new mood to original array
    moods.push(gifInput);
    console.log(moods);

    buttonDisplay();
  });




$(document).on("click", ".moodChoice", showTheGifs);

buttonDisplay();


// end of document ready 
});



