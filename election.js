$(document).ready(function() {

  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    data: {},
    dataType: "json"
  }).done(function (responseData) {
    for (i = 0; i < responseData["candidates"].length; i++) {
      var candidate = responseData["candidates"][i]["name"];      //You can add the variable before actually doing the loop
      var votes = responseData["candidates"][i]["votes"];
      $("#list").append("<li>" + candidate + "</li>" + "<li class = 'vote'>" + votes + "</li>"); // Inserting the variables with HTML
    };
  });

$("#refresh").click(function() {
  $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    data: {},
    datatype: "json"
  }).done (function (responseData) {
    for (i = 0; i < responseData["candidates"].length; i++) {
      var votes = responseData["candidates"][i]["votes"];
      var voteIndex = (i + 1) * 2;
      $(".vote:nth-child(" + voteIndex + ")").text(votes);  //Using a variable inside of the selector
    };
  });
});

});
