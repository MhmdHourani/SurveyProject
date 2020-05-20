$(document).ready(function(){
	for (var i = 0; i < usersName.length; i++) {
		$("<option/>",{
			text:usersName[i],
			id:idChange(),
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
      $(".selectDiv").hide(1000).remove();

      $("<input/>",{
        placeholder:"Write the Survey name ...",
        class: "inputnameDiv",
      }).appendTo($(".usersinfo"));

      $("<input/>",{
        placeholder:"Put the Survey Link ...",
        class: "inputlinkDiv",
      }).appendTo($(".usersinfo"));

      $("<button/>",{
        text:"Add Survey",
        class: "buttonDiv",
      }).appendTo($(".usersinfo"));
    }

    else{ 
      $("<p/>",{
        text: "Welcome " +$("#name option:selected").val(),
        class: "welcomeUser2",
      }).appendTo($(".header").show(5500));
      $(".selectDiv").hide(1000).remove();
      $(".welcomUser").append("<p>You Still have a 5 Survey to Fill.</p>")
      $("#emotional").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScKa_jmtHMUC5MwF6egs_i0sO5Y4Z_zHBo1zeQM7COsyEndsg/viewform'target='_blank'>Emotional Survey</a>");
      $("#lecture").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScGWNGmF5RTta26gM339JEA4YUVj2CFIWaSQNtnn3kTxQ89bw/viewform'target='_blank'>Lecture Survey</a>");
      $("#guest").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSeTTQ7Hg_e6o-g-Hg3a5_QtsfQxRubZ93gj96x8MSKpPGvVpA/viewform'target='_blank'>Guest Survey</a>");
      $("#sprint").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSfM5bCXP9IqryD_40-eRhxakbALvUNakZXqcBuRB1giQ7gjhA/viewform'target='_blank'>Sprint Survey</a>");
      $("#weekly").html("<a href='https://docs.google.com/forms/d/1OAcXCIx95D3urdotqZ7yWpqMfPx4kI2JnLLGVX39FD0/viewform?edit_requested=true'target='_blank'>Weekly Challenge Survey</a>");





    }
	})


});



var counter1= 0;
function idChange(){
	var string = "m";
	string += counter1;
	counter1++; 
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