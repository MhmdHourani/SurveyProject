$(document).ready(function(){

	for (var i = 0; i < usersName.length; i++) {
		$("<option/>",{
			text:usersName[i],
			id:idChange(surveycounter),
			class: "username",
		}).appendTo($("#name"));
	};

	$("#select").click(function(){
		if($("#name option:selected").val() === "" )
    {		
			alert("Please chose Your Name");
		}
    else if ($("#name option:selected").val() === "hend-isleem"||$("#name option:selected").val() ==="Nour-Saqqa"||$("#name option:selected").val() ==="Dalia-Awad" || $("#name option:selected").val() ==="Kareem-Abdelwahed" ||$("#name option:selected").val() === "Maha-Nabahin"||$("#name option:selected").val() ==="Ola-Mhanna") 
    {
      $("<p/>",{
        text: "Welcome " +$("#name option:selected").val(),
        class: "welcomeUser2",
      }).appendTo($(".header").show(5500));
      $(".selectDiv").hide();

      $("<input/>",{
        type:"password",
        placeholder:"Enter Password",
        id:"password",
        class: "inputnameDiv",
      }).appendTo($(".usersinfo"));

      $("<button/>",{
        text:"Go ...",
        class: "buttonDiv",
        id:"passwordgo"
      }).appendTo($(".usersinfo"));      

      $("#passwordgo").click(function(){
        if ($("#password").val() === "123456789") {
          $("#survey1").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScKa_jmtHMUC5MwF6egs_i0sO5Y4Z_zHBo1zeQM7COsyEndsg/viewform'target='_blank'>Emotional Survey</a>");
          $("#survey2").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScGWNGmF5RTta26gM339JEA4YUVj2CFIWaSQNtnn3kTxQ89bw/viewform'target='_blank'>Lecture Survey</a>");
          $("#survey3").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSeTTQ7Hg_e6o-g-Hg3a5_QtsfQxRubZ93gj96x8MSKpPGvVpA/viewform'target='_blank'>Guest Survey</a>");
          $("#survey4").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSfM5bCXP9IqryD_40-eRhxakbALvUNakZXqcBuRB1giQ7gjhA/viewform'target='_blank'>Sprint Survey</a>");            $("#survey5").html("<a href='https://docs.google.com/forms/d/1OAcXCIx95D3urdotqZ7yWpqMfPx4kI2JnLLGVX39FD0/viewform?edit_requested=true'target='_blank'>Weekly Challenge Survey</a>");

          $("#password").remove();
          $("#passwordgo").remove();

          $("<input/>",{
            placeholder:"Write the Survey name ...",
            class: "inputnameDiv",
          }).appendTo($(".surveyinput"));

          $("<input/>",{
            placeholder:"Put the Survey Link ...",
            class: "inputlinkDiv",
          }).appendTo($(".surveyinput"));

          $("<button/>",{
            text:"Add Survey",
            class: "buttonDiv",
          }).appendTo($(".surveyinput"));

          $("<button/>",{
            text:"Go back",
            class: "gobackDiv",
          }).appendTo($(".surveyinput"));

          $("<input/>",{
            placeholder:"Number Survey to Delete",
            class: "deleteNumber",
          }).appendTo($(".surveyinput"));

          $("<button/>",{
            text:"Delete",
            class: "deleteNumberbutton",
            id:"delete",
          }).appendTo($(".surveyinput"));


          $(".gobackDiv").click(function(){ 
            $(".selectDiv").show();
            $(".surveyinput").hide();
           $(".welcomeUser2").remove();
          })      

          $(".buttonDiv").click(function(){

            var name = $(".inputnameDiv").val();
            var link = $(".inputlinkDiv").val();

            if(name === "" || link === ""){
              if(name === "" && link === ""){
                alert("Please Put A name % Link");
                return false;
              }
              alert("Please Put A name % Link");
              return false;
            };

            $("<li/>",{
              html: "<a href="+link +" target='_blank'>"+name+"</a>",
              class: "element",
              id: idChange(counter1),
              
            }).appendTo($(".orderlist"));
            $(".inputnameDiv").val("");
            $(".inputlinkDiv").val('');
          })

          $("#delete").click(function(){

            var del = $(".deleteNumber").val();

            if( del === ""){
              alert("Please Chose One!?");
              return false;
            }
            if (del <= surveycounter) {
              console.log(surveycounter)
              $("#survey" + del).remove();
              $(".deleteNumber").val("");
            }
          });
        } 

        else{
          alert("incorrect Password");
          $("#password").val('');
        }
      })
    }

    else{ 
      $("<p/>",{
        text: "Welcome " +$("#name option:selected").val(),
        class: "welcomeUser2",
      }).appendTo($(".header"));

      $(".selectDiv").hide();

      $("<p/>",{
        class:"surveyNumber",
      }).appendTo($(".welcomUser"));

      $(".surveyNumber").text("You Still have a "+ surveycounter +" Survey to Fill.")

      $("#survey1").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScKa_jmtHMUC5MwF6egs_i0sO5Y4Z_zHBo1zeQM7COsyEndsg/viewform'target='_blank'>Emotional Survey</a>");
      $("#survey2").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScGWNGmF5RTta26gM339JEA4YUVj2CFIWaSQNtnn3kTxQ89bw/viewform'target='_blank'>Lecture Survey</a>");
      $("#survey3").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSeTTQ7Hg_e6o-g-Hg3a5_QtsfQxRubZ93gj96x8MSKpPGvVpA/viewform'target='_blank'>Guest Survey</a>");
      $("#survey4").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSfM5bCXP9IqryD_40-eRhxakbALvUNakZXqcBuRB1giQ7gjhA/viewform'target='_blank'>Sprint Survey</a>");
      $("#survey5").html("<a href='https://docs.google.com/forms/d/1OAcXCIx95D3urdotqZ7yWpqMfPx4kI2JnLLGVX39FD0/viewform?edit_requested=true'target='_blank'>Weekly Challenge Survey</a>");

    }
  });
  $(".buttonDiv").click(function(){
    var name = $(".inputnameDiv").val();
    var link = $(".inputlinkDiv").val();
    $("<li/>",{
      text: name,
      href: link,
      class: idChange(counter1),
    }).appendTo($(".orderlist"));
  });

    $(".orderlist li").click(function(){
      surveycounter--;
     var surveyId = $(this)[0].id;
      if(surveycounter === 0){
        $(".surveyNumber").text("Thank You. You Do it");
      }else {
      $(".surveyNumber").text("");
      $(".surveyNumber").text("You Still have a "+ surveycounter +" Survey to Fill.");
      // $("#"+surveyId).css("text-decoration","line-through");
      $("#"+surveyId).css("color","red");

      }
    });





    


});


var surveycounter = 5;
var counter1= 5;
function idChange(counter){
	var string = "survey";
	string += counter;
	counter++; 
	return string;
};


var usersName = [
  'Abdulrahmaan-Hussein',
  'Ahmad-Abdallah-altayeb',
  'Abdulrhman-Abusamhadana',
  'Ahmed-Azzam',
  'Ahmed-Elsaikaly',
  'Ahmed-Hilles',
  'Ahmed-Maher-ibai',
  'Ahmed-Mushtaha',
  'Akram-Timraz',
  'Anas-Abdulwahed',
  'Ayman-Almanasra',
  'Basma-Alafafi',
  'Dalia-Awad',
  'Doaa-AbuJayyab',
  'Eman-Abu-Waked',
  'Fatima-Abu-Rashed',
  'Ibrahim-Abu-nemer',
  'Israa-AbuHarb',
  'Kamel-Hajjaj',
  'Karam-Qaoud',
  'Kareem-Abdelwahed',
  'Khaled-Abousheikh',
  'Khaled-Ali',
  'Maha-Nabahin',
  'Mahmoud-Elhalabi',
  'Mohammed-ALHourani',
  'Mohammed-Abushaban',
  'Mohammed-Alsheikh-Ali',
  'Mohammed-Elbilbeisi',
  'Nadera-Qaoud',
  'Neveen-Elkhozondar',
  'Nour-Saqqa',
  'Ola-Mhanna',
  'Razan-Abuikmail',
  'Rula-Abu-Hasna',
  'Safaa-Alshami',
  'Sara-Dahman',
  'Shoukri-Aljerjawi',
  'Wael-Taqia',
  'Walaa-Sbaih',
  'Yasmeen-Abu-Kwaik',
  'Yasmin-Hillis',
  'Yossef-Yasin',
  'hend-isleem'
];