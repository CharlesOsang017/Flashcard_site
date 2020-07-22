$(document).ready(function(){
    $(".here").click(function(){
        $(".show").show(300);
    });
    $(".list").click(function(){
        $("#liste").show(3000);
    });
    $(".me").click(function(){
        $("#liste").hide(3000);
    })
});

