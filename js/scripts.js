$(document).ready(function() {
  $("#blanks form").submit(function(event){
    var nameInput = $("input#name").val();
    var educationInput = $("input#education").val();
    var emailInput = $("input#email").val();
    var dreamInput = $("input#dream").val();
    var why = $("#why").val();
    var idea = $("#idea").val();
    var platform = $("#platform").val();
    var drive = $("#drive").val();
    var big = $("#big").val();

    if ((why === "IDK. 'cause?" || why === "or the pure joy of it." || why === "sounds super cool!" && why != "live and learn! reach for the stars!" && why != "for the next gen. I live to give.") && (idea === "Nope!" || idea === "To be honest, I live to design. Color, shape, presentation! Others can do the rest.") && (platform === "The Web. What else is there?" || platform ==="mobile! They went to the moon with less computing power then I have in my phone!") && (drive === "Pass the mask and the flippers and buy me a ticket to Tobago! Let's make it quick, and I will pick up other skills when I need them. Auto transmission, back up camera, navigation. I want all the short cuts!") && (big === "I'm all about that front-end interaction. Put me in,coach!")) {
      responce = "Java";
    } else if ((why === "get a job!" || why === "moneymoneymoney moooooney!") && (idea === "Yes, indeed I do!") && (drive === "The deepest. In order to bake an apple pie, one must first invent the universe. First, engineering degree. Then and internship at Ford Motor Co. In my free time, I will build my car. I will learn to drive the machine that I know from the rubber up." || drive === "Deep. Sort of really deep. Let me learn on a manual transmission ancient Volvo wagon. If I learn to drive on that thing, all other cars will be a breeze.") && (big != "I'm all about that front-end interaction. Put me in,coach!")) {
      responce = "C#";
    } else if (idea === "To be honest, I live to design. Color, shape, presentation! Others can do the rest.") {
      responce = "CSS";
    } else {
      responce = "PHP";
    }


    $('.name').text(nameInput);
    $('.education').text(educationInput);
    $('.email').text(emailInput);
    $('.dream').text(dreamInput);
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
