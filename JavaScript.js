$(document).ready(function(){
	for (var i = 0; i < usersName.length; i++) {
		$("<option/>",{
			text:usersName[i],
			id:idChange(),
			class: "username",
		}).appendTo($("#name"));
	};

	$("#select").click(function(){
		if($("#name option:selected").val() === "" ){		
			alert("Please chose Your Name");
		}else{ 
      $("<p/>",{
        text: "Welcome " +$("#name option:selected").val(),
        class: "welcomeUser2",
      }).appendTo($(".header").show(5500));
      $(".selectDiv").hide(1000).remove();
      $("#emotional").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScKa_jmtHMUC5MwF6egs_i0sO5Y4Z_zHBo1zeQM7COsyEndsg/viewform'>Emotional Survey</a>");
      $("#lecture").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLScGWNGmF5RTta26gM339JEA4YUVj2CFIWaSQNtnn3kTxQ89bw/viewform'>Lecture Survey</a>");
      $("#guest").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSeTTQ7Hg_e6o-g-Hg3a5_QtsfQxRubZ93gj96x8MSKpPGvVpA/viewform'>Guest Survey</a>");
      $("#sprint").html("<a href='https://docs.google.com/forms/d/e/1FAIpQLSfM5bCXP9IqryD_40-eRhxakbALvUNakZXqcBuRB1giQ7gjhA/viewform'>Sprint Survey</a>");
      $("#weekly").html("<a href='https://docs.google.com/forms/d/1OAcXCIx95D3urdotqZ7yWpqMfPx4kI2JnLLGVX39FD0/viewform?edit_requested=true'>Weekly Challenge Survey</a>");





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