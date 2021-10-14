$("#options i").click(function(){
   $("#colors-optins").toggle()
});
let lis= $("#colors-optins ul li");
lis.eq(0).css("backgroundColor","#fff");
lis.eq(1).css("backgroundColor","tomato");
lis.eq(2).css("backgroundColor","teal");
lis.eq(3).css("backgroundColor","tan");
lis.eq(4).css("backgroundColor","orange");


lis.click(function(){
let color= $(this).css("backgroundColor");
$(".sara h1,.sara h4").css("color", color);
$(".sara a").css("backgroundColor", color);
});



$("#options img").click(function(){
 let bg= $(this).attr("src");
 $(".header").css("backgroundImage", `url(${bg})`)
});


let profileOffset = $("#about").offset().top
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  if (scrollTop>profileOffset)
    {
      $("#about").css({"backgroundColor":"#ececec" ,"transition": "all .5s ease-in-out"  });
      $("#options").css({"display":"none"});



    }
   else{
      $("#about").css("backgroundColor","transparent");
      $("#options").css({"display":"block","transition": "all .5s ease-in-out"});


     }
});
let profile = $(".sara").offset().top
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop>profile){
    $("nav").css({"backgroundColor":"#fff","transition": "all .5s ease-in-out" , "boxShadow":"2px 2px 10px #4c4c4c","height":"70px" });
    $(".navbar-brand img").attr("src","imgs/logo-dark.png")
    $(".arrow").css({"display":"block"});
  }
  else{
    $("nav").css({"backgroundColor":"transparent", "boxShadow":"none","height":"100px"});
    // var dw =$(document).width();
    // if (dw ==767){  
        $(".navbar-brand img").attr("src","imgs/logo.png"); ////////////////mediaQuery??
  // }
    $(".arrow").css({"display":"none"});
  }
  })
  $(".arrow").click(function() {
    $("html,body").animate({scrollTop:0},1000)
  });
    
  
  $("nav a").click(function(){
    let aHref = $(this).attr("href");
    let Offset =$(aHref).offset().top;
    $("html,body").animate({scrollTop:Offset},1000)

  });
  



$(document).ready(function(){
$(".load").fadeOut(2000 , function(){
  $("body").css({"overflow":"auto"})
});
})