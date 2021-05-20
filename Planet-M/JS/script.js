// ---------------      This  API "ajax1" is for loading music    --------------------------
var count=0;
let ajax1 = $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/music',
    dataType: 'json',
    async: true,
    success: function (responseData) {
        console.log("From 1st Call");
        let audios = ''
        $.each(responseData, function (i, v) {
            
            audios += `
            

            <div id="${v.url}" class="resource-box">
             <div class="song-image">
             <img class="img-fluid" src=${v.img} />
             </div>
             <div class="song-title">
                  <strong><span>${v.name}</span></strong>
                  <p>${v.id}</p>
              </div>  
              </div>
              
              `
                count= count + 1;
                console.log(count);
              if(count==5){
                 $(`<div class="carousel-item active"><div class="inside-main-content">${audios}</div>  </div>`).appendTo('.treading-carousel')
                audios='';
            
                }

                else if(count % 5 == 0 && count != 5){
                $(`<div class="carousel-item "><div class="inside-main-content">${audios}</div>  </div>`).appendTo('.treading-carousel');
           
                    audios='';
            }
        }
        )
        console.log('remaining');
       // console.log(audios);
        if(audios){
            $(`<div class="carousel-item"><div class="inside-main-content">${audios}</div>  </div>`).appendTo('.treading-carousel');
        }
        // $(".carousel-inner").append(audios)
        
    },
    error: function () {
        console.log('not able to access the data')
    }
})

// ---------------      This  API ajax2 is for loading Artists    --------------------------
 var cnt=0;
let ajax2 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/artists",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 2nd Call");
    let artists = "";
    $.each(responseData, function (i, v) {
      console.log("v",v);
      artists += `
      <figure class="artist-box" >
      <img class="artist-image"  src="${v.ProfilePicture}" alt="">
      <figcaption id="${v.ArtistId}" class="artist-name">${v.Artistname}</figcaption>
    </figure>
            `;
            cnt= cnt + 1;
            console.log(cnt);
          if(cnt==5){
            console.log("if artiests"+artists);
            $(`<div class="carousel-item active"><div id="artists-section">${artists}</div>  </div>`).appendTo('.carousel-artists');
             artists='';
        
            }

            else if(cnt % 5 == 0 && cnt != 5){
            $(`<div class="carousel-item"><div id="artists-section">${artists}</div>  </div>`).appendTo('.carousel-artists');
         
       
            artists='';
        }
    });
   // console.log('remaining');
    //console.log(artists);
    if(artists){
      $(`<div class="carousel-item"><div id="artists-section">${artists}</div>  </div>`).appendTo('.carousel-artists');
    }

    //$("#artists-section").append(artists);
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// ---------------      This  API ajax3 is for loading Podcasts    --------------------------
var cnt1=0;
let ajax3 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/music?category=podcast",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log("From 3rd Call");
    let podcasts = "";
    $.each(responseData, function (i, v) {
      //console.log("data",responseData)
      podcasts += `
      <div id="${v.id}" class="resource-box">
      <div class="song-image">
      <img class="img-fluid" src=${v.img} />
      </div>
      <div class="song-title">
           <strong><span>${v.name}</span></strong>
           <p>${v.id}</p>
       </div>  
       </div>
            `;
            cnt1=  cnt1 + 1;
            console.log( cnt1);
          if(cnt1==5){
              console.log("podcaste"+podcasts);
             $(`<div class="carousel-item active"><div id="Podcasts-section">${podcasts}</div>  </div>`).appendTo('.podcast');
             podcasts='';
        
            }

            else if( cnt1 % 5 == 0 &&  cnt1 != 5){
            $(`<div class="carousel-item "><div id="Podcasts-section">${podcasts}</div>  </div>`).appendTo('.podcast');
       
            podcasts='';
        }
    });
    console.log('remaining');
    console.log(podcasts);
    if(podcasts){
        $(`<div class="carousel-item"><div id="Podcasts-section">${podcasts}</div>  </div>`).appendTo('.podcast');
        
    }
    //$("#Podcasts-section").append(podcasts);
  },
  error: function () {
    console.log("not able to access the data");
  },
});

// ---------------      This  API ajax2 is for New Release    --------------------------
var newReleaseCount=0;
let ajax4 = $.ajax({
  type: "GET",
  url: "http://localhost:3000/newReleases",
  dataType: "json",
  async: true,
  success: function (responseData) {
    console.log(responseData)
    console.log("From 3rd Call");
    let newRelease = "";
    $.each(responseData, function (i, v) {
      //console.log("new release",v);
      newRelease += `
      <div id="${v.id}" class="resource-box">
      <div class="song-image">
      <img class="img-fluid" src=${v.img} />
      </div>
      <div class="song-title">
           <strong><span>${v.name}</span></strong>
           <p>${v.id}</p>
       </div>  
       </div>
            `;
            newReleaseCount= newReleaseCount + 1;
           // console.log(newReleaseCount);
          if(newReleaseCount==4){
            //console.log("inside new release"+newRelease);
            console.log("inside if")
             $(`<div class="carousel-item active"><div id="newRelease-section">${newRelease}</div></div>`).appendTo('.carousel-releases')
             newRelease='';
            
        
            }

            else if(newReleaseCount % 4 == 0 && newReleaseCount != 4){
            $(`<div class="carousel-item "><div class="inside-main-content">${newRelease}</div></div>`).appendTo('.carousel-releases');
       
            newRelease='';
        }
    });
   // console.log('remaining');
    //console.log(newRelease);
    if(newRelease){
        $(`<div class="carousel-item"><div class="inside-main-content">${newRelease}</div></div>`).appendTo('.carousel-releases');
    }

   // $("#newRelease-section").append(newRelease);
  },
  error: function () {
    console.log("not able to access the data");
  },
});
// -----------------------     $(document).ready()  is for every document   ------------------------------
$(document).ready(function () {
  console.log("Path name is " + window.location.pathname);
  console.log("Path name is href " + window.location.href);
  // -----------------------------------------------language-starts-------------------------------------------
  $(".dropdown-menu a").on("click", function () {
    var a_href = $(this).attr("id");
    console.log(a_href);

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?language=" + a_href,

      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log(responseData);

        let audios = "";
        $.each(responseData, function (i, v) {
          console.log(v.url);
          audios += `
            
            <div id="${v.id}" class="resource-box">
         <div class="song-image">
         <img class="img-fluid" src=${v.img} />
         </div>
         <div class="song-title">
              <strong><span>${v.name}</span></strong>
              <p>${v.id}</p>
          </div>  
          </div> 
            `;
        });
        $("p:first").text(a_href.toUpperCase() + " SONGS");
        $("p.library-sub-title1:not(:first)").remove();
        $("#newRelease-section,#Podcasts-section,#artists-section").remove();
        $(".inside-main-content").empty();
        $(".inside-main-content").append(audios);
      },
      error: function () {
        console.log("not able to access the data");
      },
    });
  });

  // -----------------------------------------------language-Ends-------------------------------------------

  // -----------------------     $("body").on('load'...)  is only for HOME PAGE   --------------

  $("body").on("load", function () {
    if (window.location.href.indexOf("Home.html") > -1) {
      $.when(ajax1).done((data1) => {
        console.log("AJAX-1 Is Loaded : ", data1);

        $.when(ajax2).done((data2) => {
          console.log("AJAX-2 Is Loaded : ", data2);
        });

        $.when(ajax3).done((data3) => {
          console.log("AJAX-3 Is Loaded : ", data3);
        });

        $.when(ajax4).done((data4) => {
          console.log("AJAX-4 Is Loaded : ", data4);
        });
      });

      console.log(window.location.href.indexOf("Home.html"));
      console.log("It works");
    }

    //----------------    After clicking on artist's name    -----------------

    $("body").on("click", ".artist-name", function () {
      alert("Clicked");
      console.log("Clicked artist image");
      let name = $(this).attr("id");
      localStorage.setItem("item", name);
      window.location.href = "./Artists.html?artistName=" + name;
    });

    // $("body").on('click','.song-image',function () {
    //   alert("Clicked on song")
    //   let songId = $(this).attr('id');
    //   alert("Song Id Is :" + songId)
    //   window.location.href = "http://127.0.0.1:5500/HTML/temp.html?songId=" + songId;
    // })
  });
  //  ------------------------    $("body").on('load'...) ENDS HERE     -----------------

  //  ------------------------    Artist Page     -----------------

  if (window.location.pathname == "/HTML/Artists.html") {
    const qstring = window.location.search;
    const urlParams = new URLSearchParams(qstring);
    const artistName = urlParams.get("artistName");

    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?artist=" + artistName,
      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log("From 4th Call");
        console.log("Artist Particular", responseData);
        let Particular_artist = "";
        $.each(responseData, function (i, v) {
          Particular_artist += `
          <div id="${v.id}" class="resource-box">
          <div class="song-image">
          <img class="img-fluid" src=${v.img} />
          </div>
          <div class="song-title">
               <strong><span>${v.name}</span></strong>
               <p>${v.id}</p>
           </div>  
           </div>
                `;
        });

        $("#artists-page").append(Particular_artist);
      },
      error: function () {
        console.log("not able to access the data");
      },
    });
  }

  //  ------------------------    Artist Page ENDS HERE     -----------------

  //--------------------------- After Clicked On Song

  $("body").on("click", ".resource-box", function () {
    let songurl = $(this).attr("id");
    window.location.href = "./temp.html?id=" + songurl;
  });

  $("#searchkey").on("keyup", function () {
    let key = $(this).val().toLowerCase();
    console.log(key);

    $(".resource-box").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
    });
  });

  //---for audio player buttons----//
  //audio functionalities start
  // if (window.location.href.indexOf("audioplyer.html") > -1) {
  //   let searchParams = new URLSearchParams(window.location.search);
  //   let id = searchParams.get("id");
  //   console.log(id);
  //   $.ajax({
  //     type: "GET",
  //     url: "http://localhost:3000/music?id=" + id,
  //     dataType: "json",
  //     async: true,
  //     success: function (responseData) {
  //       console.log(responseData);
  //       let song = "";
  //       $.each(responseData, function (i, v) {
  //         song += `
  //       <source src="${v.url}" type="audio/mp3">
  //             `;
  //       });
  //       $(".songs").append(song);
  //     },
  //     error: function () {
  //       console.log("not able to access the data");
  //     },
  //   });
  //   // var audio = new Audio("../Assets/Audios/music1.mp3");
  //   // $(".inside-main-content").append(audios);
  //   $("#play").on("click", function () {
  //     audio.play();
  //   });
  //   $("#pause").on("click", function () {
  //     audio.pause();
  //   });
  //   $("#repeat").on("click", function () {
  //     if (audio.currentTime != 0) {
  //       audio.currentTime = 0;
  //       audio.play();
  //     }
  //   });
  // }
  //  ------------------------    temp PAGE Starts here     -----------------

  if (window.location.pathname == "/HTML/temp.html") {
    let searchParams = new URLSearchParams(window.location.search);
    let id = searchParams.get("id");
    console.log(id);
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/music?id=" + id,
      dataType: "json",
      async: true,
      success: function (responseData) {
        console.log(responseData);
        let song = "";
        $.each(responseData, function (i, v) {
          song += `
        <source src="${v.url}" id="${v.url}"  class ="audio" type="audio/mp3">
              `;
        });
        $(".songs").append(song);
      },
      error: function () {
        console.log("not able to access the data");
      },
    });
    let url = $(".audio").attr("id");
    console.log(url);
    let myaudio = new Audio(url);

    // This is for play button on top in green colour
    $("body").on("click", ".playButton", function () {
      myaudio.play();

      $("#playbtn").hide();
      $("#pausebtn").show();
    });
    //-------------------------------

    // This is for play button on audio bar
    $("body").on("click", "#playbtn", function () {
      myaudio.play();

      $("#playbtn").hide();
      $("#pausebtn").show();
    });

    $("body").on("click", "#pausebtn", function () {
      console.log("Current Time Is " + myaudio.currentTime);
      myaudio.pause();
      $("#playbtn").show();
      $("#pausebtn").hide();
    });
    $("body").on("click", "#repeatbtn", function () {
      console.log("Current Time Is " + myaudio.currentTime);

      myaudio.currentTime = 0;
      myaudio.play();
    });
    // This is for fast-forward and fast-backward
    $("body").on("click", "#fastbackwarddbtn", function () {
      console.log("Current Time Is " + myaudio.currentTime);

      myaudio.currentTime = myaudio.currentTime - 10;
      console.log("Current Time After Backwarding Is " + myaudio.currentTime);
    });
    $("body").on("click", "#fastforwardbtn", function () {
      console.log("Current Time Is " + myaudio.currentTime);
      myaudio.currentTime = myaudio.currentTime + 10;
      console.log("Current Time After Forwarding Is " + myaudio.currentTime);
    });
    // Fast forward and backward ends

    // This is for mute unmute
    $("body").on("click", ".volumebtn", function () {
      if (myaudio.muted === false) {
        myaudio.muted = true;
      } else {
        myaudio.muted = false;
      }
      $("#volume-up-button").toggle();
      $("#volume-mute-button").toggle();
    });

    //  ----   Mute Unmute Ends   ------
  }

  //  ------------------------    temp Page ENDS HERE     -----------------

  //Log In
  $("#login").click(function () {
    let id = $("#userId").val();
    let password = $("#userPassword").val();

    alert(id + " " + password);

    if (id === "") {
      // alert("Enter User Id  ")
      $("#userId").removeClass("valid").addClass("invalid");
      $("#userId").css({ display: "block" });
      // $("#userId").css({"color":"red"})
    } else if (password === "") {
      // alert("Enter Password ")
      $("#userPassword").removeClass("valid").addClass("invalid");
      $("#userPassword").css({ display: "block" });
      // $("#userPassword").css({"color":"red"})
    } else {
      $.ajax({
        type: "GET",
        url: `http://localhost:3000/users?q=${id}`,
        dataType: "json",
        async: true,
        success: function (data) {
          console.log(data);
          if (password == data[0].password) {
            //if (password == data.password) {
            console.log("Password is " + data.password);

            //This below line generates a random token after user is logged in
            token = Math.random().toString(36).substr(2, 8);
            sessionStorage.setItem("token", token);

            console.log("Log In");

            window.location.replace("./Home.html");
          } else {
            console.log("Password is " + data.password);
            alert("Wrong Pass");
            console.log("!!! Wrong Password");
          }
        },
        error: function () {
          alert("Invalid user");
          console.log("!!! User Id Wrong And Pass!!!");
        },
      });
    }
  });

  //Regstration :

  $("#registration").click(function () {
    const name = $("#name").val();
    const email = $("#email").val();
    const userId = $("#userId").val();
    const password = $("#userPassword").val();
    const confirmPassword = $("#confirmPassword").val();

    alert(
      name +
        "  " +
        email +
        " " +
        userId +
        " " +
        password +
        " " +
        confirmPassword
    );

    alert(
      name +
        "  " +
        email +
        " " +
        userId +
        " " +
        password +
        " " +
        confirmPassword
    );

    if (name === "") {
      alert("Enter Name ");
      $("#name").removeClass("valid").addClass("invalid");
      $("#name").css({ display: "block" });
      // $("#name").css({"color":"red"})
    } else if (email === "") {
      alert("Enter Email");
      $("#email").removeClass("valid").addClass("invalid");
      $("#email").css({ display: "block" });
      // $("#email").css({"color":"red"})
    } else if (userId === "") {
      alert("Enter User Id");
      $("#userId").removeClass("valid").addClass("invalid");
      $("#userId").css({ display: "block" });
      // $("#userId").css({"color":"red"})
    } else if (password === "") {
      alert("Enter Password");
      $("#userPassword").removeClass("valid").addClass("invalid");
      $("#userPassword").css({ display: "block" });
      // $("#userPassword").css({"color":"red"})
    } else if (confirmPassword === "") {
      alert("Enter Confirm Password");
      $("#confirmPassword").removeClass("valid").addClass("invalid");
      $("#confirmPassword").css({ display: "block" });
      // $("#confirmPassword").css({"color":"red"})
    } else {
      if (password === confirmPassword) {
        jQuery.ajax({
          url: "http://localhost:3000/users",
          type: "POST",
          data: {
            id: userId,
            password: `${password}`,
            name: `${name}`,
            email: `${email}`,
          },
          dataType: "json",
          beforeSend: function (x) {
            if (x && x.overrideMimeType) {
              x.overrideMimeType("application/j-son;charset=UTF-8");
            }
          },

          success: function (result) {
            //Write your code here
            alert("success");
          },
        });
      } else {
        alert("Password Not Match");
      }
    }
  });

  // For validation

  // Fname :
  $("#name").on("input", function () {
    var input = $(this);
    var is_name = input.val();
    var re = /^[a-zA-Z ]+$/;
    var user = re.test(input.val());
    if (user && is_name.length > 4) {
      input.removeClass("invalid").addClass("valid");
      $("#fname").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#fname").css({ display: "block" });
      $("#fname").css({ color: "red" });
    }
  });

  //Email

  $("#email").on("input", function () {
    var input = $(this);
    var re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email = re.test(input.val());
    console.log(is_email);
    if (is_email) {
      input.removeClass("invalid").addClass("valid");
      $("#mail").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#mail").css({ display: "block" });
      $("#mail").css({ color: "red" });
    }
  });

  //UserId
  $("#userId").on("input", function () {
    var input = $(this);
    var re = /(?=[a-zA-Z0-9-]{5,25}$)^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/;
    var re1 =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    var user = re.test(input.val());
    var user1 = re1.test(input.val());
    if (user || user1) {
      input.removeClass("invalid").addClass("valid");
      $("#username").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");
      $("#username").css({ display: "block" });
      $("#username").css({ color: "red" });
    }
  });

  // Password :
  $("#userPassword").on("input", function () {
    var input = $(this);
    var is_pass = input.val();
    var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    var user = re.test(input.val());
    if (user && is_pass.length > 4) {
      input.removeClass("invalid").addClass("valid");
      $("#password").css({ display: "none" });
    } else {
      input.removeClass("valid").addClass("invalid");

      $("#password").css({ display: "block" });
      $("#password").css({ color: "red" });
    }

    // NewPassword :

    $("#newPassword").on("input", function () {
      var input = $(this);
      var is_pass = input.val();
      var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
      var user = re.test(input.val());
      if (user && is_pass.length > 4) {
        input.removeClass("invalid").addClass("valid");
        $("#password1").css({ display: "none" });
      } else {
        input.removeClass("valid").addClass("invalid");

        $("#password1").css({ display: "block" });
        $("#password1").css({ color: "red" });
      }
    });
  });
  $("body").trigger("load");

  // Search Song Functionality

  $("#searchkey").on("keyup", function () {
    let key = $(this).val().toLowerCase();
    console.log(key);

    $(".resource-box").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(key) > -1);
    });
  });

  //audio functionalities end---//

  // User Profile Validations--------------------------------------//

  $(function () {
    $("#fileUpload").change(function (event) {
      var x = URL.createObjectURL(event.target.files[0]);
      $("#upload-img").attr("src", x);
      console.log(event);
    });
  });

  //change password :

  $("#editPass").click(function () {
    alert("in 253");
    var storedArray = JSON.parse(sessionStorage.getItem("userdata"));
    console.log(storedArray.id);

    const userId = storedArray.id;
    const oldpass = $("#oldPass").val();
    const newpass = $("#newPass").val();
    const confirmpass = $("#confirmPass").val();

    alert(userId + " " + oldpass + " " + newpass + " " + confirmpass);

    $.ajax({
      type: "GET",
      url: `http://localhost:3000/users/${userId}`,
      dataType: "json",
      async: true,
      success: function (data) {
        console.log(data);

        if (newpass === confirmpass) {
          if (oldpass === data.password) {
            alert("User Found");

            jQuery.ajax({
              url: `http://localhost:3000/users/${userId}`,
              type: "PUT",
              data: {
                id: userId,
                password: `${newpass}`,
                name: `${data.name}`,
                email: `${data.email}`,
              },
              dataType: "json",
              beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                  x.overrideMimeType("application/j-son;charset-UTF-8");
                }
              },

              success: function (result) {
                alert("success");
              },
            });
          } else {
            alert("Wrong Password!!!");
            console.log("Wrong Password!!!");
          }
        }
      },
    });
  });

  // Change Profile Pic :

  $(function () {
    $("#fileupload").change(function (event) {
      var x = URL.createObjectURL(event.target.files[0]);

      $("#upload-img").attr("src", x);
      console.log("Event Trigger : " + event);

      let i = document.getElementById("upload-img");

      console.log("Imgae src : " + i.getAttribute("src"));

      //  var img = $('#upload-img');
      //  alert(img.attr('src')); // foo.jpg
      //  var fullpath = window.location.host + img.attr('src');
      //  alert(fullpath); // http://example.com/foo.jpg

      var images = $(".profile-images img").attr("src");
      alert(images);
      var images1 = $(".profile-images img").prop("src");
      alert(images1);
    });
  });
  // hide and show the div of user profile
  $("#editProfile").click(function () {
    $("#passwordDiv").toggle();
    //   $('#editProfileDiv').toggle();
  });

  $("#changePassword").click(function () {
    $("#editProfileDiv").toggle();
    //    $('#passwordDiv').toggle();
  });
});
// Logout Functionality
function Logout() {
  sessionStorage.removeItem("token");
  window.location.href = "../HTML/Login.html";
}
