(function(window){


	function definePsycho(){
		
		var Psycho = {};
		Psycho.color = function () {
			document.getElementById("Psycho").style.color = getRandomColor();
		};
		Psycho.spacing = function (){
			document.getElementById("Psycho").style.letterSpacing = getRandomSpacing();
		};
		Psycho.transition = function (){
			document.getElementById("Psycho").style.transition = "all 1s";
		};
		

		return Psycho;
	}

	if(typeof(Psycho) === 'undefined') {
		window.Psycho = definePsycho();

	}

	//function Psycho(element){

	//}



//functions for random

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSpacing() {

	var number = Math.floor(Math.random() * 100) -50;
	var spacing = number + "px";
	return spacing;
}

})(window);

function PsychoPara(condition){
	
	if(condition.transition == true){
		Psycho.transition();
	}else{console.log("Wrong use of parameter : transition, or set to false.")}

	if(condition.color == true){
		if(condition.interval){
			setInterval(Psycho.color, condition.interval);
		}else{
			//if not set by USER give default value of 3000.
			setInterval(Psycho.color, 3000);
		}
	}else{console.log("Wrong use of parameter : color, or set to false.")}

	if(condition.spacing == true){
		if(condition.interval){
			//Use interval set by user.
			setInterval(Psycho.spacing, condition.interval);
		}else{
			//if not set by USER give default value of 3000.
			setInterval(Psycho.spacing, 3000);
		}
	}else{console.log("Wrong use of parameter : spacing, or set to false.")}
	}
