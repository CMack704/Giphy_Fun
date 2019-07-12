//array of my favorite topics
var topics = ["dogs", "gaming", "basketball", "football", "rocket league", "soccer", "game of thrones","NASA", "Universe"]

//Api key PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ



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

       

            var newImage1 = $("<img src='" + stillGiphy1 + "'>");
            var newImage2 = $("<img src='" + stillGiphy2 + "'>");
            var newImage3 = $("<img src='" + stillGiphy3 + "'>");
            var newImage4 = $("<img src='" + stillGiphy4 + "'>");
            var newImage5 = $("<img src='" + stillGiphy5 + "'>");

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
            button.text(topics[i]);
            $("#topicsButton").append(button);
        }
    }
    makeButtons();