$("h3").hide();

$(".btn1").click(function(){

    var ID=$("this").attr("id");
    console.log(ID);
    $("h1").toggle();
    $("h3").toggle();
});


