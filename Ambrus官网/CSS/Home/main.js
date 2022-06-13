var sections = document.getElementsByClassName("sect")

document.addEventListener('scroll', function(e) {
	if(window.scrollY<sections[1].offsetTop-480){
		sections[1].children[0].style.filter = "grayscale(100%)";
	}

	if(window.scrollY>sections[1].offsetTop-480){
		sections[1].children[0].style.filter = "grayscale(0%)";
		sections[2].children[0].style.filter = "grayscale(100%)";
	}

	if(window.scrollY>sections[2].offsetTop-480){
		sections[1].children[0].style.filter = "grayscale(100%)";
		sections[3].children[0].style.filter = "grayscale(100%)";
		sections[2].children[0].style.filter = "grayscale(0%)";
	}

	if(window.scrollY>sections[3].offsetTop-480){
		sections[2].children[0].style.filter = "grayscale(100%)";
		sections[4].children[0].style.filter = "grayscale(100%)";
		sections[3].children[0].style.filter = "grayscale(0%)";
	}

	if(window.scrollY>sections[4].offsetTop-480){
		sections[3].children[0].style.filter = "grayscale(100%)";
		sections[5].children[0].style.filter = "grayscale(100%)";
		sections[4].children[0].style.filter = "grayscale(0%)";
	}

	if(window.scrollY>sections[5].offsetTop-480){
		sections[4].children[0].style.filter = "grayscale(100%)";
		sections[6].children[0].style.filter = "grayscale(100%)";
		sections[5].children[0].style.filter = "grayscale(0%)";
	}

	if(window.scrollY>sections[6].offsetTop-480){
		sections[5].children[0].style.filter = "grayscale(100%)";
		sections[7].children[0].style.filter = "grayscale(100%)";
		sections[6].children[0].style.filter = "grayscale(0%)";
	}

});