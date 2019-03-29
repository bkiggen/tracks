$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var educationInput = $("input#education").val();
    var emailInput = $("input#email").val();
    var dreamInput = $("input#dream").val();
    var five_yearsInput = $("input#five_years").val();
    var why = $("#why").val();
    var idea = $("#idea").val();
    var platform = $("#platform").val();
    var drive = $("#drive").val();
    var big = $("#big").val();

    if (why === "1" || "2" || "3") {
      responce = "Java";
    })

    $('.name').text(nameInput);
    $('.education').text(educationInput);
    $('.email').text(emailInput);
    $('.dream').text(dreamInput);
    $('.five_years').text(five_yearsInput);
    $('.why').text(why);
    $('.idea').text(idea);
    $('.platform').text(platform);
    $('.drive').text(drive);
    $('.big').text(big);
    $('.responce').text(responce);

    $('#story').fadeIn(duration=1000);
     $('.initial').slideUp(duration=1000);

  event.preventDefault();
  });
});
