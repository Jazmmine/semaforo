window.addEventListener("load", function() {
	var superCri = document.getElementById("superCri");
	superCri.addEventListener("click", function() {
		var color = document.getElementById("color").value;

		if (color == "rojo") {
			document.getElementsByClassName("rojo")[0].classList.toggle("bordeRojo");
			document.getElementsByClassName("marron")[0].classList.remove("bordeMarron");
			document.getElementsByClassName("violeta")[0].classList.remove("bordeVioleta");
		}
		else if(color == "marron"){
			document.getElementsByClassName("marron")[0].classList.toggle("bordeMarron");
			document.getElementsByClassName("rojo")[0].classList.remove("bordeRojo");
			document.getElementsByClassName("violeta")[0].classList.remove("bordeVioleta");
		}
		else if(color == "violeta"){
			document.getElementsByClassName("violeta")[0].classList.toggle("bordeVioleta");
			document.getElementsByClassName("rojo")[0].classList.remove("bordeRojo");
			document.getElementsByClassName("marron")[0].classList.remove("bordeMarron");
		}
	});
});