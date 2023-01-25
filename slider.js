var image = document.getElementById("imageSlider");
var gauche = document.getElementById("flecheGauche");
var droite = document.getElementById("flecheDroite");
var numeroImage = 1;
var nombreImage = 2;    /* à changer en cas d'ajout d'images */



gauche.addEventListener("click", clicGauche);
droite.addEventListener("click", clicDroit);

function clicDroit(){
    
	numeroImage++;

	if(numeroImage <= nombreImage)
		image.src = "images/slider/bg" + numeroImage + ".jpg";
	else{
		numeroImage = 1;
		image.src = "images/slider/bg" + numeroImage + ".jpg";
	}

}

function clicGauche(){

	numeroImage--;
	if (numeroImage > 0) {
		image.src = "images/slider/bg" + numeroImage + ".jpg";
	}
	else{
		numeroImage = nombreImage;
		image.src = "images/slider/bg" + numeroImage + ".jpg";
	}

}


var nav = document.getElementById("navprojets");
var IDallworks = document.getElementById("works");
var IDcreative = document.getElementById("creative");
var IDcorporate = document.getElementById("corporate");
var IDportfolio = document.getElementById("navportfolio");
var CLASSportfolio = document.getElementsByClassName("portfolio");
var CLASScreative = document.getElementsByClassName("creative");
var CLASScorporate = document.getElementsByClassName("corporate");
var CLASSallworks = document.getElementsByClassName("allworks");

nav.addEventListener("click", navCheck);

function navCheck(){

	for(var i = 0; i < CLASSallworks.length; i++){
		CLASSallworks[i].style.display = "none";
	}

	if(IDallworks.checked){
		for(var i = 0; i < CLASSallworks.length; i++){
		CLASSallworks[i].style.display = "block";
		}
	}
	else if(IDcreative.checked){    
		for(var i = 0; i<CLASScreative.length; i++){
			CLASScreative[i].style.display  = "block";
		}	
	}
	else if(IDcorporate.checked){
		for(var i = 0; i<CLASScorporate.length; i++){
			CLASScorporate[i].style.display  = "block";
		}	
	}else{
		for(var i = 0; i<CLASSportfolio.length; i++){
			CLASSportfolio[i].style.display  = "block";
		}	
	}
}



  

