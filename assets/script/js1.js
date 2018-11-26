$(document).ready(function() {

  //Code for the photos tab

  let a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g= 0, h=0,j=0;
  var pictures = ["DSC00735","DSC06736", "DSC09000", "DSC07645", "DSC07750", "DSC08292", "DSC07788", "DSC05795", "DSC05777"];
  var tag = ["Skyline of San Francisco", "Flying over the clouds", "Point Reyes", "Hodad's Float", "Potstickers.. among other things", "More potstickers among other things", "View from the room", "Maryland", "Flying solo in the evening" ]
  for(i = 0; i < 8; i++) {
    //<div id = #pictureno>tag</div>
    let id = "'" + pictures[i] + "'";
    $("#organize-pics").append("<div id ="+id+" >"+tag[i]+"</div>");
    $("#" +pictures[i] ).css("background-image","url('assets/img/" + pictures[i] + ".JPG')");

    $("#" +pictures[i]).css("width", "400px");
    $("#" +pictures[i]).css("height", "200px");
    $("#"+pictures[i]).css("background-size", "cover");
    $("#" + pictures[i]).css("color", "rgba(255,0,0,0)");
    $("#" + pictures[i]).css("font-size","50px");
    $("#" + pictures[i]).css("text-align", "center");
    $("#" + pictures[i]).css("padding-top", "100px");
    $("#" + pictures[i]).css("margin", "20px");
  }
  $("#"+pictures[0]).click(function() {
    if (a == 0) {
      $("#"+pictures[0]).css("color", "rgba(255,0,0,1)");
      a = 1;
    } else {
      $("#"+pictures[0]).css("color", "rgba(255,0,0,0)");
      a = 0;
    }
  })


  $("#"+pictures[1]).click(function() {
    if (b == 0) {
      $("#"+pictures[1]).css("color", "rgba(255,0,0,1)");
      b = 1;
    } else {
      $("#"+pictures[1]).css("color", "rgba(255,0,0,0)");
      b = 0;
    }
  })
  $("#"+pictures[2]).click(function() {
    if (c == 0) {
      $("#"+pictures[2]).css("color", "rgba(255,0,0,1)");
      c = 1;
    } else {
      $("#"+pictures[2]).css("color", "rgba(255,0,0,0)");
      c = 0;
    }

  })
  $("#"+pictures[3]).click(function() {
    if (d == 0) {
      $("#"+pictures[3]).css("color", "rgba(255,0,0,1)");
      d= 1;
    } else {
      $("#"+pictures[3]).css("color", "rgba(255,0,0,0)");
      b = 0;
    }

  })
  $("#"+pictures[4]).click(function() {
    if (e == 0) {
      $("#"+pictures[4]).css("color", "rgba(255,0,0,1)");
      e= 1;
    } else {
      $("#"+pictures[4]).css("color", "rgba(255,0,0,0)");
      e = 0;
    }

  })
  $("#"+pictures[5]).click(function() {
    if (f == 0) {
      $("#"+pictures[5]).css("color", "rgba(255,0,0,1)");
      f = 1;
    } else {
      $("#"+pictures[5]).css("color", "rgba(255,0,0,0)");
      f = 0;
    }

  })
  $("#"+pictures[6]).click(function() {
    if (g == 0) {
      $("#"+pictures[6]).css("color", "rgba(255,0,0,1)");
      g = 1;
    } else {
      $("#"+pictures[6]).css("color", "rgba(255,0,0,0)");
      g = 0;
    }
  })
  $("#"+pictures[7]).click(function() {
    if (h == 0) {
      $("#"+pictures[7]).css("color", "rgba(255,0,0,1)");
      h = 1;
    } else {
      $("#"+pictures[7]).css("color", "rgba(255,0,0,0)");
      h = 0;
    }

  })
  $("#"+pictures[8]).click(function() {if (b == 0) {
    $("#"+pictures[8]).css("color", "rgba(255,0,0,1)");
    j = 1;
  } else {
    $("#"+pictures[8]).css("color", "rgba(255,0,0,0)");
    j = 0;

  }
})

//End disgusting Code
//Code for the 2nd hobbies tab

$("#f2-bg").append("<p id = 'hidelater'>click to see more</p>");
$("#terminal").css("display", "none");
$("#mlab").css("display", "none");
$("#showlater").css("display", "none");
$("#text").css("display", "none");
var arr = ["terminal", "mlab", "text"];
let counter = 0;
$(window).click(function() {
  if (counter == 0) {
    $('#hidelater').fadeOut(100);
    $("#showlater").css("display", "inline");
  }
  if ((counter % 3) == 1 || counter %3== 2 || counter %3== 0) {
    let h = $(window).height() / 2;
    let w = $(window).width() / 2;
    $("#" + arr[(counter-1) % 3]).css("top", Math.random() * h);
    $("#" + arr[(counter-1) % 3]).css("left", Math.random() * w);
    $("#" + arr[(counter-1) % 3]).css("display", "inline");
    counter = counter + 1;
  } else {
    let h = $(window).height() / 2;
    let w = $(window).width() / 2;
    console.log(h);
    if (counter == 4) {

      $("#showlater").css("display", "inline");
    }
    $("#" + arr[(counter-1) % 3]).css("display", "none");
    $("#" + arr[(counter-1) % 3]).css("top", Math.random() * h);

    $("#" + arr[(counter-1) % 3]).css("left", Math.random() * w);
    console.log(Math.random() * h);

    counter = counter + 1;
  }

})

//End code
//Code for the 3rd hobbies tab
for (i = 1; i < 8; i++) {

  $("#box" + i).css("display", "none");
}
//End code

//Code for generating lots of squares in books tab
var colors = ["red", "blue", "yellow"];
let width1 = Math.random() * $(window).width();
let height1 = Math.random() * $(window).height();
for (k = 0; k < 20; k++) {
  height1 = Math.random() * $(window).height();
  width1 = Math.random() * $(window).width();
  $("#f3-bg").append("<div class = 'square' style ='left: " + width1 + "px; top:"+height1 + "px; background-color:" + colors[k%3] + "';></div>");

}

});
