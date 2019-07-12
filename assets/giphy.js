//array of my favorite topics
var topics = ["dogs", "gaming", "basketball", "football", "rocket league", "soccer", "game of thrones","NASA", "Universe"]

//Api key PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ
var queryURL = "http://api.giphy.com/v1/gifs/search?q=dog&api_key=PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ&limit=5"
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response.data[.0.images.original.url]);
})


//function to get response from giphy and disply in html
    function giphyResponse() {

        var topic = $(this).attr("topic-data")
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ&limit=5"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var stillGiphy1 = response.data[.0.images.original_still.url];
            var stillGiphy2 = response.data[.1.images.original_still.url];
            var stillGiphy3 = response.data[.2.images.original_still.url];
            var stillGiphy4 = response.data[.3.images.original_still.url];
            var stillGiphy5 = response.data[.4.images.original_still.url];

            var Giphy1 = response.data[.0.images.original.url];
            var Giphy2 = response.data[.1.images.original.url];
            var Giphy3 = response.data[.2.images.original.url];
            var Giphy4 = response.data[.3.images.original.url];
            var Giphy5 = response.data[.4.images.original.url];

       

            var newImage1 = $("<img src='" + stillGiphy1 + "' data-still='" + stillGiphy1 + "' data-animated='" + Giphy1 + "' data-state='still'>");
            var newImage2 = $("<img src='" + stillGiphy2 + "' data-still='" + stillGiphy2 + "' data-animated='" + Giphy2 + "' data-state='still'>");
            var newImage3 = $("<img src='" + stillGiphy3 + "' data-still='" + stillGiphy3 + "' data-animated='" + Giphy3 + "' data-state='still'>");
            var newImage4 = $("<img src='" + stillGiphy4 + "' data-still='" + stillGiphy4 + "' data-animated='" + Giphy4 + "' data-state='still'>");
            var newImage5 = $("<img src='" + stillGiphy5 + "' data-still='" + stillGiphy5 + "' data-animated='" + Giphy5 + "' data-state='still'>");

            $("#topics").append(newImage1);
            $("#topics").append(newImage2);
            $("#topics").append(newImage3);
            $("#topics").append(newImage4);
            $("#topics").append(newImage5);
        });

    
    }
    function makeButtons(){
        $("#topicsButton").empty()

        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.addClass("topics-button");
            button.attr("topic-data", topics[i]);
            button.attr("data-state");
            button.attr("data-animate");
            button.attr("data-still");
            button.text(topics[i]);
            $("#topicsButton").append(button);
        };
    };


    $("#add-topic").on("click", function(event){
        event.preventDefault();
        var topic = $("#topic-input").val().trim();
        topics.push(topic);
        makeButtons();
    });


    $(".topics.button").on("click", function(){
        var state = $(this).attr("data-state");
        var animatedGiph = $(this).attr("data-animated");
        var stillGiph = $(this).attr("data-still");

        if (state === "still") {
            $(this).attr("src", animatedGiph);
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", stillGiph);
            $(this).attr("data-state", "still");
        }
    });

    $(document).on("click", ".topics-button", giphyResponse);


    makeButtons();