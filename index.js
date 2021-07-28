$(document).ready(function(){
    $(".img1").click(function(){
      $(".img1").slideToggle(1500);
    $(".design").slideToggle(1500);
    }); 
    $(".design").click(function(){
        $(".design").slideToggle(1500);
      $(".img1").slideToggle(1500);
    });
  });
  
  $(document).ready(function(){
    $(".img2").click(function(){
       $(".img2").slideToggle(1500);
    $(".dev").slideToggle(1500);
    });
    $(".dev").click(function(){
        $(".dev").slideToggle(1500);
      $(".img2").slideToggle(1500);
    });
  });
  
  $(document).ready(function(){
    $(".img3").click(function(){
       $(".img3").slideToggle(1500);
    $(".product").slideToggle(1500);
    });
     $(".product").click(function(){
        $(".product").slideToggle(1500);
      $(".img3").slideToggle(1500);
    });
  });


  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $(".cover1").show();
    }).mouseout(function(){
      $(".cover1").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $(".cover2").show();
    }).mouseout(function(){
      $(".cover2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $(".cover3").show();
    }).mouseout(function(){
      $(".cover3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $(".cover4").show();
    }).mouseout(function(){
      $(".cover4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $(".cover5").show();
    }).mouseout(function(){
      $(".cover5").hide();
    });
    $("#work6").mouseover(function(){
      $(".cover6").show();
    }).mouseout(function(){
      $(".cover6").hide();
    });
    $("#work7").mouseover(function(){
      $(".cover7").show();
    }).mouseout(function(){
      $(".cover7").hide();
    });
    $("#work8").mouseover(function(){
      $(".cover8").show();
    }).mouseout(function(){
      $(".cover8").hide();
    });
  });
  
$(document).ready(function(){
    $("#validation").submit(function(){
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#comment").val();
      if (name && email && comment){
        alert (name + ", we have received your message. We will get back to you as soon as possible.Thank you for reaching out to Delani Studio.");
      }
      else {
        alert("Please enter correct information!");
      }
      
    });
  
  });