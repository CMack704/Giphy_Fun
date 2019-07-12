
var topics = ["dogs", "gaming", "basketball", "football", "rocket league", "soccer", "game of thrones","NASA", "Universe"]

//Api key PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ




    function giphyResponse() {

        var topic = $(this).attr("topic-data")
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=PkzLNR7ZPXGvM0fBXS0c8tDme5snUNQZ&limit=5"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            var stillGiphy = [response.data[0].images.original_still.url,
             response.data[1].images.original_still.url,
             response.data[2].images.original_still.url,
             response.data[3].images.original_still.url,
             response.data[4].images.original_still.url]

            var giphy = [response.data[0].images.original.url,
             response.data[1].images.original.url,
             response.data[2].images.original.url,
             response.data[3].images.original.url,
             response.data[4].images.original.url]

       

            var newImage1 = $("<img class='gif' src='" + stillGiphy[0] + "' data-still='" + stillGiphy[0] + "' data-animated='" + giphy[0] + "' data-state='still'>");
            var newImage2 = $("<img class='gif'  src='" + stillGiphy[1] + "' data-still='" + stillGiphy[1] + "' data-animated='" + giphy[1] + "' data-state='still'>");
            var newImage3 = $("<img class='gif'  src='" + stillGiphy[2] + "' data-still='" + stillGiphy[2] + "' data-animated='" + giphy[2] + "' data-state='still'>");
            var newImage4 = $("<img class='gif'  src='" + stillGiphy[3] + "' data-still='" + stillGiphy[3] + "' data-animated='" + giphy[3] + "' data-state='still'>");
            var newImage5 = $("<img class='gif'  src='" + stillGiphy[4] + "' data-still='" + stillGiphy[4] + "' data-animated='" + giphy[4] + "' data-state='still'>");

            $("#topics").append(newImage1);
            $("#topics").append(newImage2);
            $("#topics").append(newImage3);
            $("#topics").append(newImage4);
            $("#topics").append(newImage5);

            $(newImage1).on("click", function(){                
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", giphy[0]);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", stillGiphy[0]);
                    $(this).attr("data-state", "still");
                }                
            });
            $(newImage2).on("click", function(){                
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", giphy[1]);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", stillGiphy[1]);
                    $(this).attr("data-state", "still");
                }                
            });
            $(newImage3).on("click", function(){                
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", giphy[2]);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", stillGiphy[2]);
                    $(this).attr("data-state", "still");
                }                
            });
            $(newImage4).on("click", function(){                
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", giphy[3]);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", stillGiphy[3]);
                    $(this).attr("data-state", "still");
                }                
            });
            $(newImage5).on("click", function(){                
                var state = $(this).attr("data-state")
                if (state === "still") {
                    $(this).attr("src", giphy[4]);
                    $(this).attr("data-state", "animate");
                } else {
                    $(this).attr("src", stillGiphy[4]);
                    $(this).attr("data-state", "still");
                }                
            });
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


    

    $(document).on("click", ".topics-button", giphyResponse);


    makeButtons();